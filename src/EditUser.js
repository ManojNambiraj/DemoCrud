import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./CreateUser.css";

function EditUser() {
  const params = useParams();
  const navigate = useNavigate();

  const [FormData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
  });

  const handleChange = ({ target: { value, name } }) => {
    setFormData({ ...FormData, [name]: value });
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let user = await axios.get(
      `https://63f979b3473885d837ce478c.mockapi.io/user/${params.id}`
    );
    setFormData(user.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, age, email } = FormData;

    await axios.put(
      `https://63f979b3473885d837ce478c.mockapi.io/user/${params.id}`,
      {
        name,
        age,
        email,
      }
    );
    alert("User Updated Successfully");
    navigate("/userlist")
  };

  return (
    <div className="parent">
      <div className="child">
        <h2 style={{ textAlign: "center", marginBottom: "50px" }}>
          Edit User: {params.id}
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
              type="number"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="age"
              value={FormData.age}
              onChange={handleChange}
            />
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

export default EditUser;
