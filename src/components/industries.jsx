import React from "react";
import It_Img from "../Images/It_Img.png";
import "./industries.css";

const Industries = () => {
return (
<div>
{/*  */}

<div className="technology_c">
<h1>Service's</h1>

<p className="technology_ptag">
Tailored IT And Business Solution, Leveraging cutting-Edge
Technologies To Enclave Efficiency Strealine, Process, And Drive
Sustainable Growth For Organanizations.
</p>

<div className="techology_flex">
<div className="flex_main_con">
{/*  */}

<div>
<h2>Customer Support</h2>
<p>
24 X 7 <br></br>
Responsive Customer Assistance
</p>
</div>

{/*  */}
<div>
<h2>
{" "}
Tailored Business <br></br> Solutions
</h2>
<p>
Tailored Solutions <br></br> for your Business <br></br>{" "}
</p>
</div>
{/*  */}
<div>
<h2>Business Solutions</h2>
<p>
Streamlined Services for <br></br>
Business Efficiency
</p>
</div>
{/*  */}
</div>

<img src={It_Img}></img>

<div className="flex_main_con">
{/*  */}
<div>
<h2>Website AMC</h2>
<p>
Yearly & Half Yearly <br></br>
Basis AMC<br></br>
</p>
</div>
{/*  */}
<div>
<h2>
Digital <br></br>
Solutions
</h2>
<p>
Digitally Solutions <br></br> for your Business <br></br>
</p>
</div>
{/*  */}
<div>
<h2>
Innovate Solutions <br></br>
</h2>
<p>
We Provide innovative <br></br> Solutions{" "}
</p>
</div>

{/*  */}
</div>

{/*  */}
</div>

<div></div>
</div>

{/*  */}

</div>
);
};

export default Industries;
