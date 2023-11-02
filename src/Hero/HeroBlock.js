import React, { useState } from "react";
import './HeroBlock.css'
import hero from './hero.jpg'

const HeroBlock = (props) => {
    const [keyword, setkeyword] = useState('')

    const SearchSubmit = (e) => {
        setkeyword(e.target.value)
    }

    return (
        <div className="Hero">
            <img src={hero} />
            <p>Search your items</p>
            <input onChange={SearchSubmit} />
            <button onClick={() => props.submitHandler(keyword)}>Search</button>


        </div>
    )
}
export default HeroBlock