import React, { useEffect, useState } from 'react';

function Email() {
  const [registeredUsers, setRegisteredUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    setRegisteredUsers(storedUsers);
  }, []);

  const handleDelete = (email) => {
    const updatedUsers = registeredUsers.filter(user => user.email !== email);
    setRegisteredUsers(updatedUsers);
    localStorage.setItem('registeredUsers', JSON.stringify(updatedUsers));
  };

  return (
    <div className="container">
      <h1>Registered Users</h1>
      {registeredUsers.length === 0 ? (
        <p>No users registered yet.</p>
      ) : (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {registeredUsers.map((user, index) => (
              <tr key={index}>
                <td>{user.firstName} {user.lastName}</td>
                <td>{user.email}</td>
                <td>
                  <button className="btn btn-danger" onClick={() => handleDelete(user.email)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Email;
