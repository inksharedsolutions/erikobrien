import React from 'react'
import {Link} from 'gatsby'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderCover from './slider'


const Content = () =>{
    return(
        <>
            <section className="body-book-contents-wrapper">
                <div className="heading-contents">
                    <div className="two-grid-layout" id="id-heading-layout">
                        <h1>
                            <h5 className="heading-title">
                                The Last Admiral
                            </h5>
                            <span className="heading-subtitle">
                                Part 3 of th Duareheim Staff Saga
                            </span>
                        </h1>

                        <p>
                            Lorem Ipsum is simply dummy text of the
                            printing and  typesetting industry. Lorem Ipsum
                            has been the industry's  standard dummy text 
                            ever since the 1500s, <Link to="/">read more</Link>
                        </p>
                    </div>
                </div>

                 <div className="content-slider-wrapper">
                    <SliderCover/>
                 </div>
            </section>
        </>
    )
}

export default Content