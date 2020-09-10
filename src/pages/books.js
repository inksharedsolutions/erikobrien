import React from 'react'
import Layout from "../components/layout"
import BookInfo from "../components/BookInfo/bookinfo"
import { DiscussionEmbed } from "disqus-react"
import Footer from "../components/footer"

/*Images*/
import Book1 from "../../static/books/1st_book.png"
import Book2 from "../../static/books/2nd_book.png"
import Book3 from "../../static/books/3rd_book.png"
import Book4 from "../../static/books/4th_book.png"


const ATB = (props) =>{


    const slug =(props.location.href);

	const disqusConfig = {
	  shortname: 'erik-obrien',
	  config: { identifier:  12, slug}
    }
    

    return(
        <>
            <main className="body-wrapper" id="non-front-pages">
                <Layout>
                    <section className="author-section" id="book--containers">

                        <h1 className="heading-intro-section">
                            Featured Books
                        </h1>

                        <section className="body-contents">
                            <BookInfo  
                            data={{
                                    title:`Kur's Rage`,
                                    spanTitle: 'Part 1 of the Duaredheim Staff Saga',
                                    imgSrc: Book2,
                                    order:false,
                                    content:
                                    `<p>
                                        Stand on the parapets of Highcrest Garrison as the
                                        characters prepare for battle against a demon lord and his
                                        fiendish minions. Feel their sorrow in the tour’s aftermath
                                        as they decide to reunite in search of new adventures. A chance 
                                        meeting with a mysterious wizard compels them to undertake a scouting mission.
                                        During their journey, they encounter an enemy army and must discover 
                                        the motivations of its dark commander. Join them as they face dire wolves,
                                        Red Orcs, and supernatural foes.
                                     </p>
                                    
                                     <p>
                                        Twists of fate, ancient clues, and unknown enemies will lead 
                                        them toward a prophesied quest that could change their world, 
                                        and two parallel storylines will intertwine as they race to 
                                        acquire the lost pieces of an ancient artifact before their 
                                        nemesis. 
                                     </p>
                                     <p>
                                        Sitting by the fire, an old Gnome narrates all these to three young 
                                        soldiers in a village tavern. The old Gnome’s fantastic tale seems 
                                        impossible—until his audience meets some of his characters in the flesh!
                                     </p>
                                     <p>
                                        Magic, fairy races, dragons, and a wide pantheon of gods weave a
                                        fine tapestry in Kur’s Rage. Triumph of the spirit and the love and 
                                        loyalty of its characters are what set it apart. 
                                     </p>
                                     `,

                                    ebooks:{
                                        stratton: 'https://www.stratton-press.com/books/kurs-rage-part-1-of-the-duaredheim-staff-saga/',
                                        barnes: 'https://www.barnesandnoble.com/w/kurs-rage-erik-dj-obrien/1133203332?ean=9781643456478',
                                        amazon:'https://www.amazon.com/Kurs-Rage-Part-Duaredheim-Staff-ebook/dp/B07X3Y6DY7/ref=sr_1_1?dchild=1&keywords=erik+obrien&qid=1595480426&sr=8-1', 
                                    },
                                    paperback:{
                                        amazon:'https://www.amazon.com/Kurs-Rage-Part-Duaredheim-Staff/dp/1643454846/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1595480426&sr=8-1',
                                        barnes:'https://www.barnesandnoble.com/w/kurs-rage-erik-dj-obrien/1133203332?ean=9781643454849',
                                        booksamillion:'https://www.booksamillion.com/p/Kurs-Rage/Erik-D-J-OBrien/9781643454849?id=7954811514842',
                                    }
                                }}
                            />

                         <BookInfo  
                                data={{
                                title:`The Drums of Doom`,
                                spanTitle: 'Part 2 of the Duaredheim Staff Saga',
                                imgSrc: Book3,
                                order:true,
                                content:
                                `<p>
                                    The second part of Erik D. J. O’Brien’s The Duaredheim Staff
                                    Saga contains excerpts from the Chronicles of Olak Tempestus, 
                                    which describes in detail the actions and plans of Vlad’s 
                                    revolutionaries and their taking of hostages dearest to the
                                    Fermen’s hearts. At the end of the book, Erik also introduces 
                                    his great uncle, John Elias Anderson of Monson, Massachusetts,
                                    WWII veteran, wounded at Capri Leone, Sicily, on August 10, 
                                    1943, and immortalizes him forever in this work as Sir John.
                                </p>
                            
                                <p>
                                    Drawn by the enchanted pull of the locating scepter, Kalor
                                    leads Carmen’s rangers into the treacherous, uncharted depths
                                    of Underearth. With courage and the unquenchable spirit of 
                                    soldiers, they embark upon a perilous journey in exploration 
                                    of the Secret Way.  After an encounter with the terrible Darg,
                                    they battle for their lives in the Halls of the Dead.
                                    In possession of the gem of the staff, they race to acquire 
                                    the rest of the artifact and save their world.
                                </p>`,

                                ebooks:{
                                    stratton: 'https://www.stratton-press.com/books/the-drums-of-doom-part-2-of-the-duaredheim-staff-saga/',
                                    barnes: 'https://www.barnesandnoble.com/w/the-drums-of-doom-erik-d-j-obrien/1133208530?ean=9781643457390',
                                    amazon:'https://www.amazon.com/Drums-Doom-Part-Duaredheim-Staff-ebook/dp/B07XSNZHLV/ref=sr_1_2?dchild=1&keywords=erik+obrien&qid=1595481431&sr=8-2', 
                                },
                                paperback:{
                                    amazon:'https://www.amazon.com/Drums-Doom-Part-Duaredheim-Staff/dp/1643455036/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1595481431&sr=8-2',
                                    barnes:'https://www.barnesandnoble.com/w/the-drums-of-doom-erik-d-j-obrien/1133208530?ean=9781643455037',
                                    booksamillion:'https://www.booksamillion.com/p/Drums-Doom/Erik-D-J-OBrien/9781643455037?id=7954811514842',
                                }
                            }}
                         />

                        <BookInfo  
                            data={{
                                title:`The Last Admiral`,
                                    spanTitle: 'Part 3 of the Duaredheim Staff Saga',
                                    imgSrc: Book1,
                                    order:false,
                                    content:
                                    `<p>
                                        This prequel to Kur’s Rage is part 3 of The Duaredheim Staff 
                                        Saga and portrays the final adventures of the 11th Fleet and
                                        their last admiral. Stand with Aklon when he receives a fateful
                                        letter calling him off to war. Feel his sorrow as he says farewell
                                        and leads his armada on a desperate mission. Travel the Underearth
                                        with Vlad and Darik as they must journey in secret to the academy
                                        in order to thwart a deadly assassin. Do battle with Raythe, the
                                        mysterious butler, and Phu as they struggle against Rak Shasa,
                                        a demonic entity, and the diabolical Caretakers of the Abyss.
                                        Prepare yourself for what may be the longest fantasy naval battle
                                        ever written. This epic struggle introduces the terrible general
                                        Jing Jang Lo and the ruthless forces of the Dragonian Queen as 
                                        she seeks to destroy Aklon and his ideals of freedom, and ends 
                                        with the first chapter of part 4, The Ice Moon.
                                    </p>`,

                                    ebooks:{
                                        stratton: 'https://www.stratton-press.com/books/the-last-admiral-part-3-of-the-duaredheim-staff-saga/',
                                        barnes: 'https://www.barnesandnoble.com/w/the-last-admiral-erik-d-j-obrien/1123607884?ean=9781643457604',
                                        amazon:'https://www.amazon.com/Last-Admiral-Part-Duaredheim-Staff-ebook/dp/B081K9H7B7/ref=sr_1_3?dchild=1&keywords=erik+obrien&qid=1595481673&sr=8-3', 
                                    },
                                    paperback:{
                                        amazon:'https://www.amazon.com/Last-Admiral-Part-Duaredheim-Staff/dp/1643454439/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1595481673&sr=8-3',
                                        barnes:'https://www.barnesandnoble.com/w/the-last-admiral-erik-d-j-obrien/1123607884?ean=9781643454436',
                                        booksamillion:'https://www.booksamillion.com/p/Last-Admiral/Erik-D-J-OBrien/9781643454436?id=7954811514842',
                                    }
                                }}
                            />


                            <BookInfo  
                                data={{
                                title:`The Ice Moon`,   
                                spanTitle: 'Part 4 of the Duaredheim Staff Saga',
                                imgSrc: Book4,
                                order:true,
                                content:
                                `
                                    <p>
                                      This epic conclusion to The Duaredheim Staff Saga begins with
                                      a detailed retelling of Prince Loren’s tragic last stand upon
                                      the hilltop Korun-Dorr and the story of Carmen’s Rangers harrowing
                                      escape from the Underearth. The Ice Moon, Part 4 of The Duaredheim
                                      Staff Saga portrays their subsequent encounter with their nemesis,
                                      and the adventures that bring them to their final confrontation with
                                      Queen Aphra and the armies of Dragonia. Fly with Carmen’s Rangers
                                      as they rocket towards the Ice Moon upon the Star Vessel Imperium.
                                    </p>

                                    <p>     
                                      Fight beside them as they face the White Wyrms of the surface
                                      and confront their diabolical leader in search of the Circlet
                                      of the Staff. March with the Kings of Safehaven as they assemble
                                      their forces in defense of their homeland. Stand with Vlad, Carmen’s
                                      Rangers and their unlikely allies as the armies of Fermenor face off
                                      against the largest military force ever assembled by Dragonia.
                                      Feel their anguish in the heat of battle when all seems lost and
                                      only a long forgotten force from the sea can save them. The Ice Moon,
                                      Part 4 of The Duaredheim Staff Saga concludes the series, which began
                                      with Kur’s Rage, The Drums of Doom, and The Last Admiral.
                                    </p>
                                `,

                                ebooks:{},
                                paperback:{}
                            }}
                         />

                        </section>

                        <div id="comment-section" >
                            <DiscussionEmbed {...disqusConfig} />
                        </div>
                        
                    </section>
                 </Layout>
                 <Footer/>
            </main>
        </> 
    )
}

export default ATB;