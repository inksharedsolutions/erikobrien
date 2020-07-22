import React, {useState, useEffect} from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


/* images*/
import Book1 from '../../static/front_covers/book_1.jpg'
import Book2 from '../../static/front_covers/book_2.jpg'
import Book3 from '../../static/front_covers/book_3.jpg'

const SliderComponent = () =>{

    const [mobState, __functState] = useState(false);
    
    useEffect(() => {
        
        window.addEventListener("resize", ()=>{ 
            __functState(window.innerWidth <= 760);
        });
    
    },[mobState]); 
    
    console.log((mobState) ? 1 : 3);

    var settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll:1,
    };

    const onClickEvent=(num) =>{
        console.log(num);
    }

    
    return(
        <>

            <Slider {...settings}>
                <div 
                    className="book-wrapper-slider" 
                    onClick={()=>onClickEvent(1)}>
                    <span>01</span>
                    <img src={Book1}/>
                </div>

                <div 
                    className="book-wrapper-slider"
                    onClick={()=>onClickEvent(2)}>

                    <span>02</span>
                    <img src={Book2}/>
                </div>

                <div 
                    className="book-wrapper-slider"
                    onClick={()=>onClickEvent(3)}>
                    <span>03</span>
                    <img src={Book3}/>
                </div> 

                <div className="book-wrapper-slider">
                    <span>01</span>
                    <img src={Book1}/>
                </div>

                <div className="book-wrapper-slider">
                    <span>02</span>
                    <img src={Book2}/>
                </div>

                <div className="book-wrapper-slider">
                    <span>03</span>
                    <img src={Book3}/>
                </div>
            </Slider>
    
        </>     
    )
}

export default SliderComponent;