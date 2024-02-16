import React, { useState } from 'react';
import './RandomQuote.css';
import { IoReloadCircleOutline } from "react-icons/io5";
import { RiTwitterXFill } from "react-icons/ri";

const RandomQuote = () => {

    let quotes = [];

    async function loadQuotes() {
        const response = await fetch("https://type.fit/api/quotes");
        quotes = await response.json();
    }

    const random = () => {
        const select = quotes[Math.floor(Math.random() * quotes.length)];
        setQuote(select);
    }

    const twitter = () => {
        window.open(`https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author.split(',')[0]}`)
    }

    const [quote, setQuote] = useState({
        text: "Peace at home, peace in the world!",
        author: "Mustafa Kemal Atatürk",
    });

    loadQuotes();

    return (
        <div className="container">
            <div className="quote">{quote.text}</div>
            <div>
                <div className="line"></div>
                <div className="bottom">
                    <div className="author">- {quote.author.split(',')[0]}</div>
                    <div className="icons">
                        <IoReloadCircleOutline className="icon" onClick={() => { random() }} />
                        <RiTwitterXFill className="icon" onClick={() => { twitter() }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RandomQuote