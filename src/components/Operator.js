import React, { useState } from "react";

const OperatorPage = () => {
  const [userList, setUserList] = useState([
    { id: 1, name: "John Doe", email: "johndoe@example.com", status: "Active" },
    { id: 2, name: "Jane Smith", email: "janesmith@example.com", status: "Inactive" },
    { id: 3, name: "Alice Johnson", email: "alicej@example.com", status: "Active" },
  ]);

  const toggleStatus = (id) => {
    setUserList(userList.map(user => 
      user.id === id ? { ...user, status: user.status === "Active" ? "Inactive" : "Active" } : user
    ));
  };

  return (
    <div className="operator-container">
      <h1>Operator Dashboard</h1>

      <section className="user-management">
        <h2>User Management</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.status}</td>
                <td>
                  <button onClick={() => toggleStatus(user.id)}>
                    Toggle Status
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="service-management">
        <h2>Service Management</h2>
        <p>
          As an operator, you can manage services here. You can add, remove, or update service information.
        </p>
        <button>Add New Service</button>
        <button>Remove Service</button>
        <button>Update Service</button>
      </section>

      <style jsx>{`
        .operator-container {
          padding: 20px;
          max-width: 1200px;
          margin: 0 auto;
          margin-top: 100px;
        }

        h1 {
          text-align: center;
          font-size: 2.5rem;
          color: #2e8b57;
          margin-bottom: 20px;
        }

        section {
          margin-bottom: 30px;
        }

        h2 {
          font-size: 2rem;
          color: #2e8b57;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
        }

        th, td {
          padding: 10px;
          text-align: left;
          border: 1px solid #ddd;
        }

        th {
          background-color: #f4f4f4;
        }

        button {
          padding: 10px 20px;
          background-color: #2e8b57;
          color: white;
          border: none;
          cursor: pointer;
          margin: 5px;
        }

        button:hover {
          background-color: #3cb371;
        }

        .service-management p {
          font-size: 1rem;
          color: #555;
        }
      `}</style>
    </div>
  );
};

export default OperatorPage;
