import React, {useState,useEffect, useRef} from 'react'
import Content from './content'

/*Images*/

import Book1 from '../../static/books/2nd_book.png'
import Book2 from '../../static/books/1st_book.png'
import Book3 from '../../static/books/3rd_book.png'


/*GSAP*/
import{TimelineLite, Power2} from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";



const Main = (props) =>{

    const [bookState, __bF] =  useState(3);
    const ImgContainer = useRef(null);
    

    let tl = new TimelineLite();


    useEffect(()=>{
        props.childActive(bookState)
 
        tl.to(ImgContainer.current , 1, { css : 
            {visibility : "visible"}})
        
    },[bookState, ])

    const ActiveBook = () =>{
        if(bookState === 1){
            return Book1
        }else if (bookState === 2){
            return Book3
        }else if ( bookState === 3){
            return Book2
        } 
    }
    
    return(
        <>
            <section className="two-body-grid">
                <div className="tw-child-grid">

                    <div 
                        ref={ImgContainer} 
                        className="img-book-wrapper">
                        <img    
                            src={ActiveBook()} 
                            alt="book-display"
                        />
                    </div>
                </div> 

                <div className="tw-child-grid">
                    <Content activeSlide={(item)=>__bF(item)}/>
                </div>
            </section>
        </>
    )
}


export default Main