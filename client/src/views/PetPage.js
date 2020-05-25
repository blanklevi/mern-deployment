import React, { useState, useEffect } from "react";
import { navigate } from "@reach/router";
import axios from "axios";

const PetPage = (props) => {
  const [pet, setPet] = useState("");
  useEffect(() => {
    axios.get(`http://localhost:8000/api/pets/${props.id}`).then((res) => {
      console.log(res);
      setPet(res.data.pet);
    });
  }, [props.id]);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:8000/api/pets/delete/" + id)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <h1>Pet Shelter</h1>
      <h2>Details about: {pet.name}</h2>
      <a href="/">Back to Home</a>
      <p>Pet Type: {pet.petType}</p>
      <p>Description: {pet.description}</p>
      <p>
        Skills: {pet.skill1} {pet.skill2} {pet.skill3}
      </p>

      <button
        onClick={(event) => {
          handleDelete(pet._id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default PetPage;
