import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [employees, setEmployees] = useState([]);
  const [form, setForm] = useState({ name: "", age: "", salary: "" });
  const [search, setSearch] = useState("");
  const [sortField, setSortField] = useState("age");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    axios.get("http://localhost:9000/employees").then((res) => {
      setEmployees(res.data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:9000/employees", form).then(() => {
      window.location.reload();
    });
  };

  const filteredEmployees = employees.filter((emp) =>
    emp.name.toLowerCase().includes(search.toLowerCase())
  );

  const sortedEmployees = [...filteredEmployees].sort((a, b) => {
    if (sortField === "name") {
      return sortOrder === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
    } else {
      return sortOrder === "asc" ? a[sortField] - b[sortField] : b[sortField] - a[sortField];
    }
  });

  return (
    <div>
      <h1>Employeeee Management</h1>
      <input
        type="text"
        placeholder="Search by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <br /><br />
      <div>
        <label>Sort by: </label>
        <select onChange={(e) => setSortField(e.target.value)} value={sortField}>
          <option value="age">Age</option>
          <option value="salary">Salary</option>
          <option value="name">Name</option>
        </select>
        <button onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}>
          {sortOrder === "asc" ? "Ascending" : "Descending"}
        </button>
      </div>
      <br /><br />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <br /><br />
        <input
          type="number"
          placeholder="Age"
          onChange={(e) => setForm({ ...form, age: e.target.value })}
        />
        <br /><br />
        <input
          type="number"
          placeholder="Salary"
          onChange={(e) => setForm({ ...form, salary: e.target.value })}
        />
        <br /><br />
        <button type="submit">Add Employee</button>
      </form>
      <ul>
        {sortedEmployees.map((emp) => (
          <li key={emp._id}>{emp.name} - {emp.age} - ${emp.salary}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
