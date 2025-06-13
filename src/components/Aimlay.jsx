import React, { useState } from "react";

const PercentageBreakdown = () => {
  const [percentage, setPercentage] = useState(0);
  const [category, setCategory] = useState("");
  const [breakdown, setBreakdown] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!category) {
      alert("Please select a category!");
      return;
    }

    const parsedPercentage = parseFloat(percentage);
    if (isNaN(parsedPercentage)) {
      alert("Please enter a valid percentage.");
      return;
    }

    if (parsedPercentage <= 0) {
      alert("Please enter a valid percentage.");
      return;
    }

    let result = {
      AM_DM: 0,
      Manager: 0,
      DH: 0,
      RkSir: 0,
      category: category,
    };

    // Breakdown logic for PhD Services
    if (category === "PhD Services") {
      if (parsedPercentage >= 2.1 && parsedPercentage <= 3.5) {
        result.AM_DM = parsedPercentage;
      } else if (parsedPercentage > 3.5 && parsedPercentage <= 6) {
        result.AM_DM = 3.5;
        result.Manager = parsedPercentage - 3.5;
      } else if (parsedPercentage > 6 && parsedPercentage <= 7.5) {
        result.AM_DM = 3.5;
        result.Manager = 2.5;
        result.DH = parsedPercentage - 6;
      } else if (parsedPercentage > 7.5 && parsedPercentage <= 10) {
        result.AM_DM = 3.5;
        result.Manager = 2.5;
        result.DH = 3.5;
        result.RkSir = parsedPercentage - 7.5;
      }
    }

    // Breakdown logic for Publication
    else if (category === "Publication") {
      if (parsedPercentage >= 3.1 && parsedPercentage <= 5) {
        result.AM_DM = parsedPercentage;
      } else if (parsedPercentage > 5 && parsedPercentage <= 7.5) {
        result.AM_DM = 5;
        result.Manager = parsedPercentage - 5;
      } else if (parsedPercentage > 7.5 && parsedPercentage <= 8.5) {
        result.AM_DM = 5;
        result.Manager = 2.5;
        result.DH = parsedPercentage - 7.5;
      } else if (parsedPercentage > 8.5 && parsedPercentage <= 12) {
        result.AM_DM = 5;
        result.Manager = 2.5;
        result.DH = 1;
        result.RkSir = parsedPercentage - 8.5;
      }
    }

    // Breakdown logic for Honorary
    else if (category === "Honorary") {
      if (parsedPercentage >= 2.1 && parsedPercentage <= 3.5) {
        result.AM_DM = parsedPercentage;
      } else if (parsedPercentage > 3.5 && parsedPercentage <= 6) {
        result.AM_DM = 3.5;
        result.Manager = parsedPercentage - 3.5;
      } else if (parsedPercentage > 6 && parsedPercentage <= 7.5) {
        result.AM_DM = 3.5;
        result.Manager = 2.5;
        result.DH = parsedPercentage - 6;
      } else if (parsedPercentage > 7.5 && parsedPercentage <= 10) {
        result.AM_DM = 3.5;
        result.Manager = 2.5;
        result.DH = 3.5;
        result.RkSir = parsedPercentage - 7.5;
      }
    }

    setBreakdown(result);
    setShowResult(true);
  };

  return (
    <div>
      <h2>Percentage Breakdown Calculator</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Total Percentage:
          <input
            type="number"
            value={percentage}
            onChange={(e) => setPercentage(e.target.value)}
            min="0"
            step="0.1"
          />
        </label>
        <br />

        <label>
          Select Category:
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select</option>
            <option value="Honorary">Honorary</option>
            <option value="PhD Services">PhD Services</option>
            <option value="Publication">Publication</option>
          </select>
        </label>
        <br />

        <button type="submit">Calculate Breakdown</button>
      </form>

      {showResult && breakdown && (
        <div>
          <h3>Breakdown for {breakdown.category}:</h3>
          <p>AM & DM: {breakdown.AM_DM.toFixed(2)}%</p>
          <p>Manager: {breakdown.Manager.toFixed(2)}%</p>
          <p>Division Head (DH): {breakdown.DH.toFixed(2)}%</p>
          <p>RK Sir: {breakdown.RkSir.toFixed(2)}%</p>
        </div>
      )}
    </div>
  );
};

export default PercentageBreakdown;