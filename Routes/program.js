// const Program = require('../Models/program')
const express = require('express');
const router = express.Router();

router.post(`/`, (req, res) => {
    const program = new Program({
      title: req.body.title,
      body: req.body.body,
      image: req.body.image,
    });
    program
      .save()
      .then((createdProgram) => {
        res.status(201).json(createdProgram);
      })
      .catch((err) => {
        res.status(500).json({
          error: err,
          success: false,
        });
      });
  });
  
  router.get(`/`, async (req, res) => {
    const programList = await Program.find();
  
    if (!programList){
      res.status(500).json({success: false})
    }
    res.send(programList);
  });

  module.exports = router;
  