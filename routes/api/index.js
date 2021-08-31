// route manager in case we add more routes after deployment 
const router = require("express").Router();
const personRoutes = require ("./Persons")

// route to DB 
router.use("/Persons", personRoutes);

// create here external routes if needed 

/// end of routes 

module.exports = router;