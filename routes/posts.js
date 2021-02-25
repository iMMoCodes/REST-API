const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

router.get("/", (req,res) => {
   res.send("We are on posts");
});


router.post("/", (req,res) => {
   const myData = new Post({
      title: req.body.title,
      description: req.body.description
   });

   myData.save()
   .then(data => {
      res.json(data);
   })
   .catch(err => {
      res.json({ message: err.message});
   })
});

module.exports = router;