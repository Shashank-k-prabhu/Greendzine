import Card from "./Card";
import search from '../assets/loupe.png'
import { useState } from "react";

const Details = () => {
  const employeeData = [
    { empid: "1", name: "John Doe", dob: "1990-01-01", role: "Developer" },
    { empid: "2", name: "Jane Smith", dob: "1992-05-15", role: "Manager" },
    { empid: "3", name: "Bob Johnson", dob: "1985-09-30", role: "Designer" },
    { empid: "4", name: "Anne Frank", dob: "1975-12-10", role: "Consultant" },
  ];
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredEmployees, setFilteredEmployees] = useState(employeeData);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    const filtered = employeeData.filter(employee =>
      employee.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredEmployees(filtered);
  }

  return (
    <div className="details">
      <header className="header">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <button className="search-button"><img src={search}></img></button>
      </header>
      {filteredEmployees.map((employee, index) => (
        <Card
          key={index}
          empid={employee.empid}
          name={employee.name}
          dob={employee.dob}
          role={employee.role}
        />
      ))}
    </div>
  );
};

export default Details;
