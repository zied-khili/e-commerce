var product = require('./product');

exports.createOne = function (req, res) {
  product.create(req.body)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send('An error occurred while creating the product.');
    });
};
exports.retrieve = function (req, res) {
  product.find({}).then((result) => {
    res.send(result);
  }).catch((error) => {
    console.log(error);
    res.status(500).send('An error occurred while retrieving products.');
  });
};

exports.retrieveOne = function (req, res) {
  product.findOne({ name: req.params.name })
    .then((result) => {
      if (!result) {
        return res.status(404).send('Product not found.');
      }
      res.json(result);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send('An error occurred while retrieving the product.');
    });
};
exports.updateOne = function (req, res) {
  product.findOneAndUpdate({ name: req.params.name }, { $inc: { quantity: 1 } })
    .then((result) => {
      if (!result) {
        return res.status(404).send('Product not found.');
      }
      res.send(result);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send('An error occurred while updating the product.');
    });
};

exports.updateOne1 = function (req, res) {
  product.findOneAndUpdate({ name: req.params.name }, { $inc: { quantity: -1 } })
    .then((result) => {
      if (!result) {
        return res.status(404).send('Product not found.');
      }
      res.send(result);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send('An error occurred while updating the product.');
    });
};

exports.deleteOne = function (req, res) {
  product.deleteOne({ name: req.params.name })
    .then((result) => {
      if (!result.deletedCount) {
        return res.status(404).send('Product not found.');
      }
      res.send(result);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send('An error occurred while deleting the product.');
    });
};