import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateUser.css";

function CreateUser() {
  const navigate = useNavigate();

  const [FormData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
  });

  const [formError, setFromError] = useState();

  const handleChange = ({ target: { value, name } }) => {
    
    setFromError("")

    let Regex = "^[0-9]*$";

    if (value.match(Regex)) {
      setFormData("");
    } else {
      setFromError("Invalid input");
    }

    setFormData({ ...FormData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, age, email } = FormData;

    axios.post("https://63f979b3473885d837ce478c.mockapi.io/user", {
      name,
      age,
      email,
    });

    alert("User Created Successfully");
    navigate("/userList");
  };

  return (
    <div className="parent">
      <div className="child">
        <h2 style={{ textAlign: "center", marginBottom: "50px" }}>
          Create User
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="name"
              value={FormData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Age
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="age"
              value={FormData.age}
              onChange={handleChange}
            />
            {formError && <label>{formError}</label>}
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputPassword1"
              name="email"
              value={FormData.email}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateUser;
