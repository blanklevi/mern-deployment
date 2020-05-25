import React, { useState, useEffect } from "react";
import { navigate } from "@reach/router";
import axios from "axios";

const EditPet = (props) => {
  const [name, setName] = useState("");
  const [petType, setPetType] = useState("");
  const [description, setDescription] = useState("");
  const [skill1, setSkill1] = useState("");
  const [skill2, setSkill2] = useState("");
  const [skill3, setSkill3] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get(`http://localhost:8000/api/pets/${props.id}`)
      .then((res) => {
        const petFromDb = res.data;
        console.log(petFromDb);
        setName(petFromDb.pet.name);
        setPetType(petFromDb.pet.petType);
        setDescription(petFromDb.pet.description);
        setSkill1(petFromDb.pet.skill1);
        setSkill2(petFromDb.pet.skill2);
        setSkill3(petFromDb.pet.skill3);
      })
      .catch((err) => {
        setErrors(err.response.data.errors);
        console.log(err.response);
      });
  };

  const handleEdit = (event) => {
    event.preventDefault();

    const editedPet = {
      name: name,
      petType: petType,
      description: description,
      skill1: skill1,
      skill2: skill2,
      skill3: skill3,
    };

    axios
      .put(`http://localhost:8000/api/pets/update/${props.id}`, editedPet)
      .then((res) => {
        console.log("updated response" + " " + res.data.name);
        navigate("/");
      })
      .catch((err) => {
        setErrors(err.response.data.errors);
        console.log(err.response.data.errors);
      });
  };

  return (
    <div>
      <div className="container">
        <h1>Pet Shelter</h1>
        <h2>Edit {name}</h2>
        <a href="/">Back to Home</a>
        <div>
          <form
            onSubmit={(event) => {
              handleEdit(event);
            }}
          >
            <div className="form-group">
              <label>Pet Name: </label>
              <input
                className="form-control"
                type="text"
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
              {errors.name ? (
                <span style={{ color: "red", marginLeft: "5px" }}>
                  {errors.name.message}
                </span>
              ) : (
                ""
              )}{" "}
              <br />
              <label>Pet Type: </label>
              <input
                className="form-control"
                type="text"
                value={petType}
                onChange={(event) => {
                  setPetType(event.target.value);
                }}
              />
              {errors.petType ? (
                <span style={{ color: "red", marginLeft: "5px" }}>
                  {errors.petType.message}
                </span>
              ) : (
                ""
              )}
              <label>Pet Description: </label>
              <input
                className="form-control"
                type="text"
                value={description}
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
              />
              {errors.description ? (
                <span style={{ color: "red", marginLeft: "5px" }}>
                  {errors.description.message}
                </span>
              ) : (
                ""
              )}
              <p>Skills (optional): </p>
              <label>Skill 1: </label>
              <input
                className="form-control"
                type="text"
                value={skill1}
                onChange={(event) => {
                  setSkill1(event.target.value);
                }}
              />
              <label>Skill 2: </label>
              <input
                className="form-control"
                type="text"
                value={skill2}
                onChange={(event) => {
                  setSkill2(event.target.value);
                }}
              />
              <label>Skill 3: </label>
              <input
                className="form-control"
                type="text"
                value={skill3}
                onChange={(event) => {
                  setSkill3(event.target.value);
                }}
              />
              <button className="btn btn-primary">Add Pet</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditPet;
