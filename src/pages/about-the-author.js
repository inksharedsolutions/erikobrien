import React from 'react';
import Layout from "../components/layout"
import Footer from "../components/footer"
import AuthorImg from '../../static/author/main_author.png'


const ATA = (props) =>{

    return (
        <>
            <main className="body-wrapper" id="non-front-pages">
                <Layout>
                    <section className="author-section">

                        <h1 className="heading-intro-section">
                            About the Author
                        </h1>
                         
                        <div className="two-grid-layout" id="grid-author-content">
                            <div className="chld-grid">
                                <div className="author-content-img">
                                    <img 
                                        src={AuthorImg} 
                                        alt="author-img"/>
                                </div>
                            </div>
                            <div className="chld-grid">
                                <section className="author-contents-section">
                                    <p>
                                        Erik D. J. O’Brien was born in Salt
                                        Lake City in 1966. He received a 
                                        Bachelor of Science Degree from the 
                                        University of Massachusetts in 1989,
                                        and then volunteered for Army service 
                                        in 1990.  Serving with the 3rd Ranger 
                                        Battalion at Fort Benning Georgia from 
                                        1991-1993, he was Honorably Discharged in 1994. 
                                    </p>
                                    <p>
                                        Returning home, he continued his education 
                                        in Creative Writing at Emerson College.
                                        A lifetime practitioner of martial arts,
                                        his other hobbies include illustration and 
                                        a love of the outdoors.  Kur’s Rage, Part 1 
                                        of the Duaredheim Staff Saga begins the grand 
                                        tale of adventure and continues with The Drums 
                                        of Doom, The Last Admiral, and reaches its epic 
                                        climax in Part 4, The Ice Moon.  He currently 
                                        lives in Norwell, Massachusetts.
                                    </p>

                                    <div className="author-marks">
                                        <h5>Erik D.J.</h5>
                                        <h1>O'Brien</h1>
                                        <span>Author & Writer</span>
                                    </div>

                                </section>
                            </div>
                        </div>
                    </section>
                </Layout>
                <Footer/>
            </main>
        </>
    )
}   


export default ATA;