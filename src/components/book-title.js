import React from 'react'
import {Link} from 'gatsby'

const BookTitle = (props) =>{
    return(
        <>
            <div className="two-grid-layout" id="id-heading-layout">
                <h1>
                    <h5 className="heading-title">
                        {props.title}
                    </h5>
                    <span className="heading-subtitle">
                        {props.spnTitle}
                    </span>
                </h1>

                <p>
                    {props.content} 
                    <Link to={`${props.srcLink}`}>read more</Link>
                </p>
            </div>
        </>
    )
}

export default BookTitle;