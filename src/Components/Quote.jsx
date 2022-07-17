import React from 'react'
import { useSelector } from 'react-redux'


const Quote = () => {
    const currentQuote = useSelector(state => state.quote.quote);
    const currentAuthor = useSelector(state => state.quote.author);
    return (
        <div>
            <div id="text" >{'"' + currentQuote + '"'}</div>
            <div id="author">- {currentAuthor}</div>
        </div>
    )
}

export default Quote

