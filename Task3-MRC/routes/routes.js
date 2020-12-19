const express = require("express");
const router = express.Router();
const {getState,addState ,getDistrict ,addDistrict, getChild , addChild} = require("../controller/api-controller");
const { addUsers, loginUser } = require("../controller/userController");

// http://localhost:5000/api/register
router.post("/register", addUsers);
// http://localhost:5000/api/login
router.post("/login", loginUser);

router.get("/getstate",getState)

// http://localhost:5000/api/addstate
router.post("/addstate", addState);

router.get("/getdistrict",getDistrict)

// http://localhost:5000/api/adddistrict
router.post("/adddistrict", addDistrict);

router.get("/getchild",getChild)

// http://localhost:5000/api/addchild
router.post("/addchild", addChild);


module.exports = router;