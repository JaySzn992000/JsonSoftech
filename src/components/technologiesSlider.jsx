import React from "react";
import Slider from "react-slick";
import "./technologiesSlider.css";

const TechnologiesSlider = () => {

const settings = {

dots: true,
infinite: true,
speed: 100,
slidesToShow: 5,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 3000,

};

return (

<div>
{/*  */}

<div className="Techflex_col_home">
<h1>
Transform Your Business <span>with Our Tech Solutions</span>
</h1>

<Slider {...settings} className="Techslider_div">

<img src="https://nexgencode.com/images/react-js.webp"></img>

{/*  */}

<img src="https://nexgencode.com/images/mySql.webp"></img>

{/*  */}

<img src="https://nexgencode.com/images/php.webp"></img>


<img src="https://nexgencode.com/images/jquery.webp"></img>

<img src="https://nexgencode.com/images/WordPress.webp"></img>


{/*  */}

</Slider>

</div>
</div>

);

};

export default TechnologiesSlider;
