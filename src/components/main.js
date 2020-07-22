import React from 'react'
import Book1 from '../../static/books/1st_book.png'
import Content from './content'


const Main = () =>{
    return(
        <>
            <section className="two-body-grid">
                <div className="tw-child-grid">

                    <div className="img-book-wrapper">
                        <img    
                            src={Book1} 
                            alt="book-display"
                        />
                    </div>
                </div> 

                <div className="tw-child-grid">
                    <Content/>
                </div>
            </section>
        </>
    )
}


export default Main