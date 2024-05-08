const express = require("express");
const router = express.Router();

router.get("/", async(req,res) => {
  res.json({msg:"Users work111"});
})

module.exports = router;