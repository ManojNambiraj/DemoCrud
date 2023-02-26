import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function UserList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let datas = await axios.get(
      "https://63f979b3473885d837ce478c.mockapi.io/user"
    );
    setData(datas.data);
  };

  const handleDelete = async (id) => {
    await axios.delete(`https://63f979b3473885d837ce478c.mockapi.io/user/${id}`);
    alert("User Deleted Successfully")
    getData();
  }

  return (
    <div className="container">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Email</th>
            <th scope="col">Operations</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => {
            return (
              <tr>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.email}</td>
                <td>
                  <Link to={`/editUser/${item.id}`} className="btn btn-success btn-sm">Edit</Link>
                  <button className="btn btn-danger btn-sm" onClick={()=>{handleDelete(item.id)}}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
