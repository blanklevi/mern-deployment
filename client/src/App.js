import React from "react";
import "./App.css";
import { Link, Redirect, Router } from "@reach/router";

import Homepage from "./views/Homepage";
import AddPet from "./views/AddPet";
import PetPage from "./views/PetPage";
import EditPet from "./views/EditPet";
import NotFound from "./views/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Homepage path="/" />
        <AddPet path="/pets/new" />
        <PetPage path="/pets/:id" />
        <EditPet path="/pets/:id/edit" />
        <NotFound default noThrow="true" />
      </Router>
    </div>
  );
}

export default App;
