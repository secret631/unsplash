import React, { useState } from "react";
import './HeroBlock.css'
import hero from './hero.jpg'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

const HeroBlock = (props) => {
    const [keyword, setkeyword] = useState('')

    const SearchSubmit = (e) => {
        setkeyword(e.target.value)
    }

    const SearchInputRendeler = () => {
        return(
            <div>
                 <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <InputBase

      onChange={
        SearchSubmit
      }
        sx={{ ml: 1, flex: 1 }}
        placeholder="search your product"
        inputProps={{ 'aria-label': 'search your product' }}
      />
      <IconButton  type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon onClick={() => props.submitHandler(keyword)}/>
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
        <DirectionsIcon />
      </IconButton>
    </Paper>
            </div>
        )
    }

    return (
        <div className="Hero">
            <img src={hero} />
            {/* <p>Search your items</p> */}
            {/* <input onChange={SearchSubmit} /> */}
            {SearchInputRendeler()}
            {/* <button onClick={() => props.submitHandler(keyword)}>Search</button> */}


        </div>
    )
}
export default HeroBlock