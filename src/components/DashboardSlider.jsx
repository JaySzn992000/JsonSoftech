import React from "react";
import Slider from "react-slick";
import "./DashboardSlider.css";
import ImgDash from '../Images/Dashboardtwo.jpg'
import ImgDashO from '../Images/Dashboardone.png'
import ImgDashTw from '../Images/Dashboardthree.jpg'


const DashboardSlider = () => {

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

<div className="flex_col_home_Dash">
<Slider {...settings} className="slider_div_Dash">
 
<div>
<img src={ImgDash}></img>
</div>

{/*  */}

{/*  */}

<div>
<img src={ImgDashO}></img>
</div>

<div>
<img src={ImgDashTw}></img>
</div>

{/*  */}
</Slider>
</div>
</div>
);

};

export default DashboardSlider;
