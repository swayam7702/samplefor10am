import React, { useState } from "react";
import '../Styles/age.css'
function AgeCaluclate() {
  const [dob, setDob] = useState("");
  const [age, setAge] = useState("");

  const calculateAge = () => {

    if (!dob) {
      alert("Please select a valid date of birth.");
      return;
    }

    const birthDate = new Date(dob);
    const today = new Date();

    let calculatedAge = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();

    if (monthDifference < 0 || (monthDifference ===   0)) {
      calculatedAge--;
    }

    setAge(calculatedAge >= 0 ? calculatedAge : "Invalid date");

  };

  return (
    <div className="app">
      <h1>Age Calculator</h1>
      <div className="input-container">
        <label htmlFor="dob">Enter your Date of Birth:</label>
        <input
          type="date"
          id="dob"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        <button onClick={calculateAge}>Calculate Age</button>
      </div>
      {age !== "" && (
        <div className="result">
          <h2>Your Age: {age}</h2>
        </div>
      )}
    </div>
  );
}

export default AgeCaluclate;
