const Pet = require("../models/pets.model");

module.exports.findAllPets = (req, res) => {
  Pet.find()
    .then((allPets) => res.json({ pets: allPets }))
    .catch((err) => res.status(400).json(err));
};

module.exports.findOnePet = (req, res) => {
  Pet.findOne({ _id: req.params.id })
    .then((onePet) => res.json({ pet: onePet }))
    .catch((err) => res.status(400).json(err));
};

module.exports.createPet = (req, res) => {
  Pet.create(req.body)
    .then((newlyCreatedPet) => res.json({ pet: newlyCreatedPet }))
    .catch((err) => res.status(400).json(err));
};

module.exports.updateExistingPet = (req, res) => {
  Pet.findOneAndUpdate({ _id: req.params.id }, req.body, {
    // findById
    runValidators: true,
    new: true,
  })
    .then((updatedPet) => res.json({ pet: updatedPet }))
    .catch((err) => res.status(400).json(err));
};

module.exports.deleteAnExistingPet = (req, res) => {
  Pet.deleteOne({ _id: req.params.id })
    .then((result) => res.json({ result: result }))
    .catch((err) => res.status(400).json(err));
};
