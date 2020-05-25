import React, { useState, useEffect } from "react";
import { navigate } from "@reach/router";
import axios from "axios";

const Homepage = (props) => {
  const [pets, setPets] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8000/api/pets").then((res) => {
      console.log(res);
      setPets(res.data.pets);
    });
  }, []);

  if (pets === null) {
    return "Loading...";
  }
  return (
    <div className="container">
      <h1>Pet Shelter</h1>
      <h2>These Pets are looking for a good home</h2>
      <a href="/pets/new">Add a pet to the shelter</a>
      <div>
        <div>
          <table className="table table-dark">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Type</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {pets.map((pet) => {
                return (
                  <tr key={pet._id}>
                    <th scope="row">{pet.name}</th>
                    <td>{pet.petType}</td>
                    <td>
                      <a href={`/pets/${pet._id}`}>Details</a> &#124;{" "}
                      <a href={`/pets/${pet._id}/edit`}>Edit</a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
