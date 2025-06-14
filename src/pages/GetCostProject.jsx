import React, { useState } from "react";
import "./GetCostProject.css";
import CostProject from "../Images/costproject.jpg";
import Topnavbar from "../components/topnavbar";
import Navbar from "../components/navbar";
import Header from "./header";
import ChatApp from "./chatApp";
import Projctcst from "../Images/Projctcst.png";

const App = () => {

const [selectedOption, setSelectedOption] = useState("html-css-js");
const [numPages, setNumPages] = useState(1);
const [totalCost, setTotalCost] = useState(699);
const [hostingOption, setHostingOption] = useState("single");
const [hostingDuration, setHostingDuration] = useState("12");
const [hostingCost, setHostingCost] = useState(159);

const handleOptionChange = (event) => {
setSelectedOption(event.target.value);
updateCost(event.target.value, numPages, hostingOption, hostingDuration);
};

const handlePageChange = (event) => {
const pages = event.target.value;
setNumPages(pages);
updateCost(selectedOption, pages, hostingOption, hostingDuration);
};

const handleHostingChange = (event) => {
setHostingOption(event.target.value);
updateCost(selectedOption, numPages, event.target.value, hostingDuration);
};

const handleHostingDurationChange = (event) => {
setHostingDuration(event.target.value);
updateCost(selectedOption, numPages, hostingOption, event.target.value);
};

const updateCost = (option, pages, hosting, duration) => {
let costPerPage = 0;

// Updated rates for HTML, CSS, JavaScript and React.js
switch (option) {
case "html-css-js":
costPerPage = 699; // HTML, CSS, JavaScript cost per page
break;
case "react":
costPerPage = 999; // React.js cost per page
break;
default:
break;
}

let hostingPrice = 0;
if (duration === "12") {
switch (hosting) {
case "single":
hostingPrice = 159 * 12; // For 12 months
break;
case "premium":
hostingPrice = 219 * 12; // For 12 months
break;
case "business":
hostingPrice = 379 * 12; // For 12 months
break;
default:
break;
}
} else if (duration === "24") {
switch (hosting) {
case "single":
hostingPrice = 119 * 24; // For 24 months
break;
case "premium":
hostingPrice = 179 * 24; // For 24 months
break;
case "business":
hostingPrice = 299 * 24; // For 24 months
break;
default:
break;
}
} else if (duration === "48") {
switch (hosting) {
case "single":
hostingPrice = 69 * 48; // For 48 months
break;
case "premium":
hostingPrice = 139 * 48; // For 48 months
break;
case "business":
hostingPrice = 239 * 48; // For 48 months
break;
default:
break;
}
}

setHostingCost(hostingPrice);
setTotalCost(costPerPage * pages + hostingPrice);
};

return (
<div>
<Topnavbar></Topnavbar>
<Navbar></Navbar>

<div className="container">
{/* <img src={Projctcst}></img> */}
<img src="https://img.freepik.com/free-vector/accounting-concept-illustration_114360-23749.jpg?ga=GA1.1.558633422.1741516213&semt=ais_hybrid&w=740"></img>

<form className="form">
<h1 className="heading">Project Cost Calculator</h1>
<h4>Select Technology:</h4>
<label className="label">
<select
value={selectedOption}
onChange={handleOptionChange}
className="select"
>
<option value="html-css-js">HTML, CSS, JAVASCRIPT</option>
<option value="react">REACT.JS</option>
</select>
</label>

<h4>Number of Pages:</h4>
<label className="label">
<input
type="number"
value={numPages}
onChange={handlePageChange}
min="1"
className="input"
/>
</label>

<h4>Select Hosting Plan (12 Months):</h4>
<label className="label">
<select
value={hostingOption}
onChange={handleHostingChange}
className="select"
>
<option value="single">
Single Website Hosting (50GB) - ₹159/month
</option>
<option value="premium">
Premium Hosting (100 Websites, 100GB) - ₹219/month
</option>
<option value="business">
Business Hosting (100 Websites, 200GB) - ₹379/month
</option>
</select>
</label>

<h4>Select Hosting Plan (24 Months):</h4>
<label className="label">
<select
value={hostingOption}
onChange={handleHostingChange}
className="select"
>
<option value="single">
Single Website Hosting (50GB) - ₹119/month
</option>
<option value="premium">
Premium Hosting (100 Websites, 100GB) - ₹179/month
</option>
<option value="business">
Business Hosting (100 Websites, 200GB) - ₹299/month
</option>
</select>
</label>

<h4>Select Hosting Plan (48 Months):</h4>
<label className="label">
<select
value={hostingOption}
onChange={handleHostingChange}
className="select"
>
<option value="single">
Single Website Hosting (50GB) - ₹69/month
</option>
<option value="premium">
Premium Hosting (100 Websites, 100GB) - ₹139/month
</option>
<option value="business">
Business Hosting (100 Websites, 200GB) - ₹239/month
</option>
</select>
</label>

<h4>Hosting Duration:</h4>
<label className="label">
<select
value={hostingDuration}
onChange={handleHostingDurationChange}
className="select"
>
<option value="12">12 Months</option>
<option value="24">24 Months</option>
<option value="48">48 Months</option>
</select>
</label>

<div className="resultContainer">
<h2>Total Website Cost: ₹{totalCost}</h2>
<h2>
Hosting Cost for{" "}
{hostingDuration === "12"
? "12 months"
: hostingDuration === "24"
? "24 months"
: "48 months"}
: ₹{hostingCost}
</h2>
</div>
</form>
</div>

<ChatApp></ChatApp>
<Header></Header>
</div>
);
};

export default App;
