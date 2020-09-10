import React, {useState, useEffect} from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderCover from './slider'
import BookContentsTitle from './book-title';

const Content = (props) =>{

    const [slideState, _sF] = useState(3);

    useEffect(()=>{
        props.activeSlide(slideState);
    },[slideState])

    const CurrentContent = () =>{
    
        if( slideState === 1){
           return ( <BookContentsTitle 
                title={`Kur's Rage`}
                spnTitle={`Part 1 of the Duaredheim Staff Saga`}
                content={`Stand on the parapets of Highcrest Garrison 
                as the characters prepare for battle against a demon 
                lord and his fiendish minions.`}
                srcLink={`/books#book1`}
            />
           )
        }else if (slideState === 2){
            return ( <BookContentsTitle 
                title={`The Drums of Doom`}
                spnTitle={`Part 2 of the Duaredheim Staff Saga`}
                content={`The second part of Erik D. J. O’Brien’s The Duaredheim Staff Saga 
                contains excerpts from the Chronicles of Olak Tempestus, 
                which describes in detail the actions and plans.`}
                srcLink={`/books#book2`}
            />
          ) 
        }else if (slideState === 3){
            return ( <BookContentsTitle 
                title={`The Last Admiral`}
                spnTitle={`Part 3 of their Duareheim Staff Saga`}
                content={`This prequel to Kur’s Rage is part 3 of The Duaredheim Staff 
                Saga and portrays the final adventures of the 11th Fleet and 
                their last admiral.`}
                srcLink={`/books#book3`}
            />
           )
        }

        else if (slideState === 4){
            return ( <BookContentsTitle
                title={`The Ice Moon`}
                spnTitle={`Part 4 of th Duareheim Staff Saga`}
                content={`The Ice Moon, Part 4 of The Duaredheim Staff
                 Saga portrays their subsequent encounter with their nemesis,
                 and the adventures that bring them to their final confrontation
                 with Queen Aphra and the armies of Dragonia`}
                srcLink={`/books#book3`}
             />
           )
        }
    }

    return(
        <>
            <section className="body-book-contents-wrapper">
                <div className="heading-contents">
                    {
                       (
                           <CurrentContent/>
                       )
                    }
                </div>

                 <div className="content-slider-wrapper">
                    <SliderCover currentSlide={(e)=> _sF(e)}/>
                 </div>

            </section>
        </>
    )
}

export default Content