import React from "react";
import Slider from "react-slick";
import Web_devImg from "../Images/web_development.jpg";
import "./slider.css";

const SliderComponent = () => {

const settings = {
dots: true,
infinite: true,
speed: 500,
slidesToShow: 1,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 3000,
};

return (

<div>

{/*  */}


<div className="flex_col_home">

<img className="slider_img" src={Web_devImg}></img>

{/* <img className="slider_img" src="https://img.freepik.com/free-vector/group-professionals-analyzing-international-map-with-pointers-charts-team-doing-global-business-research_74855-14035.jpg?ga=GA1.1.1905236279.1730002908&semt=ais_hybrid"></img> */}

    
<Slider {...settings} className="slider_div">
<div>
<p>Web Software Development Solutions</p>
<h1>
Empowering Your Business Growth with Cutting-Edge Web Software
</h1>
</div>

{/*  */}

<div>
<h1>Driving Digital Transformation for Business Growth</h1>
</div>

{/*  */}

<div>
<h1>Comprehensive Solutions Tailored for Your Business Success</h1>
</div>

{/*  */}
</Slider>

</div>
</div>
);

};

export default SliderComponent;
