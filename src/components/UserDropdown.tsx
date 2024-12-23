// src/components/UserDropdown.js
import React, { useState, useEffect } from "react";

const UserDropdown = ({ onUserSelect }) => {
  const [selectedUser, setSelectedUser] = useState(null);

  const users = [
    { id: 1, name: "Privileged User", role: "privileged" },
    { id: 2, name: "View-Only User", role: "viewer" },
  ];

  // Load the selected user from local storage on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem("selectedUser");
    if (storedUser) {
      setSelectedUser(JSON.parse(storedUser));
    }
  }, []);

  const handleUserChange = (e) => {
    const selected = users.find((user) => user.id === parseInt(e.target.value));
    setSelectedUser(selected);
    localStorage.setItem("selectedUser", JSON.stringify(selected)); // Store user in local storage
    onUserSelect(selected); // Pass the selected user to the parent
  };

  return (
    <div>
      <label htmlFor="user-dropdown">Select User:</label>
      <select
        id="user-dropdown"
        value={selectedUser ? selectedUser.id : ""}
        onChange={handleUserChange}>
        <option value="">-- Choose a user --</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default UserDropdown;
