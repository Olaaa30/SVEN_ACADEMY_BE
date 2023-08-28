const {Category} = require('../Models/categories');
const express = require('express');
const router = express.Router();

router.post(`/`, (req, res) => {
    const category = new Category({
      name: req.body.name,
      color : req.body.color,
    });
    category
      .save()
      .then((createdCategory) => {
        res.status(201).json(createdCategory);
      })
      .catch((err) => {
        res.status(500).json({
          error: err,
          success: false,
        });
      });
  });
  
  router.get(`/`, async (req, res) => {
    const categoryList = await Category.find();
  
    if (!categoryList){
      res.status(500).json({success: false})
    }
    res.send(categoryList);
  });

  module.exports = router;
  