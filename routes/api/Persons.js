//routes for internal API 
const router =require("express").Router()
const personController= require ("../../controllers/DbPersonController")

router.route("/")
    .get(personController.findAll)
    .post(personController.create);

router.route("/:id")
    .get(personController.findById)
    .put(personController.update)
    .delete(personController.remove);

module.exports = router