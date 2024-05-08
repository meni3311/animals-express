const express = require("express");
const router = express.Router();

router.get("/", async(req,res) => {
  res.json({msg:"Users work222meni"});
})

module.exports = router;