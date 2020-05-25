import React, { useState, useEffect } from "react";
import { navigate } from "@reach/router";
import axios from "axios";

const AddPet = (props) => {
  const [name, setName] = useState("");
  const [petType, setPetType] = useState("");
  const [description, setDescription] = useState("");
  const [skill1, setSkill1] = useState("");
  const [skill2, setSkill2] = useState("");
  const [skill3, setSkill3] = useState("");
  const [errors, setErrors] = useState({});

  const handleCreate = (event) => {
    event.preventDefault();
    const newPet = {
      name: name,
      petType: petType,
      description: description,
      skill1: skill1,
      skill2: skill2,
      skill3: skill3,
    };
    axios
      .post("http://localhost:8000/api/pets/new", newPet)
      .then((res) => {
        console.log(res);
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
        <h2>Know a pet needing a home?</h2>
        <a href="/">Back to Home</a>
        <div>
          <form
            onSubmit={(event) => {
              handleCreate(event);
            }}
          >
            <div className="form-group">
              <label>Pet Name: </label>
              <input
                className="form-control"
                type="text"
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
                onChange={(event) => {
                  setSkill1(event.target.value);
                }}
              />
              <label>Skill 2: </label>
              <input
                className="form-control"
                type="text"
                onChange={(event) => {
                  setSkill2(event.target.value);
                }}
              />
              <label>Skill 3: </label>
              <input
                className="form-control"
                type="text"
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

export default AddPet;
