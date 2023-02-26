import React from "react";
import CreateUser from "./CreateUser";
import UserList from "./UserList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditUser from "./EditUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateUser />} />
        <Route path="/userlist" element={<UserList />} />
        <Route path="/editUser/:id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
