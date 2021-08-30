  const db=require("../models");
  //defining methods for the DB controller
  //the ID described here it is the objectID on MongoDB
  module.exports={
      findAll: function(req,res){
          db.Person
          .find(req.query)
          .then(dbPerson => res.json(dbPerson))
          .catch(err=> res.status(442).json(err));
      },
      findById: function(req,res){
          db.Person
          .findById(req.params.id)
          .then(dbPerson=> res.json(dbPerson))
          .catch(err =>res.status(442).json(err));
      } ,
      create: function(req,res){
          db.Person
          .create(req.body)
          .then(dbPerson => res.json(dbPerson))
          .catch(err => res.status(442).json(err));
      },
      update: function(req,res){
          db.Person
          .findOneAnUpdate({id: req.params.id}, req.body)
          .then(dbPerson => res.json(dbPerson))
          .catch(err => res.status(442).json(err));
             },
        remove: function(req,res){
            db.Person.findById(req.params.id)
            .then(dbPerson => dbPerson.remove())
            .then(dbPerson => res.json(dbPerson))
            .catch(err => res.status(442).json(err));
        }
  };