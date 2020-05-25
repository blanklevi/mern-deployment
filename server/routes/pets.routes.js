const PetController = require("../controllers/pets.controller");

module.exports = (app) => {
  app.get("/api/pets/", PetController.findAllPets);
  app.get("/api/pets/:id", PetController.findOnePet);
  app.put("/api/pets/update/:id", PetController.updateExistingPet);
  app.post("/api/pets/new", PetController.createPet);
  app.delete("/api/pets/delete/:id", PetController.deleteAnExistingPet);
};
