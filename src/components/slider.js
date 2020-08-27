import React, {useState, useEffect} from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


/* images*/
import Book1 from '../../static/front_covers/book_1.jpg'
import Book2 from '../../static/front_covers/book_2.jpg'
import Book3 from '../../static/front_covers/book_3.jpg'
import Book4 from '../../static/front_covers/book_4.jpg'

const SliderComponent = (props) =>{

    const [mobState, __functState] = useState();
    const [sliderNum , sliderState] = useState(3);


    const settings = {
        dots: false, 
        infinite: true,
        speed: 1500,
        slidesToShow: mobState ? 1 : 3,
        slidesToScroll:1,
    };

    
    useEffect(() => {


        window.addEventListener("resize", ()=>{ 
            __functState(window.innerWidth <= 760);

            console.log( window.innerWidth <= 760 );
        });

        /*Slider Action*/
        props.currentSlide(sliderNum);
        
    },[mobState, sliderNum]);
    

    const onClickEvent=(num) =>{ 
        return sliderState(num);
    }

    
    return(
        <>

            <Slider {...settings}>

                <div className="book-wrapper-slider"
                    onClick={()=>onClickEvent(1)}>
                    <span>01</span>
                    <img src={Book3}/>
                </div>
              
                <div className="book-wrapper-slider"
                    onClick={()=>onClickEvent(2)}>
                    <span>02</span>
                    <img src={Book2}/>
                </div>

                <div className="book-wrapper-slider"
                    onClick={()=>onClickEvent(3)}>
                    <span>03</span>
                    <img src={Book1}/>
                </div>

                 <div className="book-wrapper-slider"
                    onClick={()=>onClickEvent(4)}>
                    <span>04</span>
                    <img src={Book4}/>
                </div>
        
                
            </Slider>

        </>     
    )
}

export default SliderComponent;