import React, { useState, useEffect } from 'react';
import Card from './Card';
import axios from 'axios';
import './CardList.css'
import HeroBlock from '../Hero/HeroBlock';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';




const CardList = () => {

    const [Photos, setPhotos] = useState(null)
    const [text, settext] = useState('random')
    const [PageNumber, setPageNumber] = useState(1)


    useEffect(() => {
        axios.get('https://api.unsplash.com/search/photos', {
            params: { query: text, per_page: 20, page: PageNumber },
            headers: {
                Authorization: 'Client-ID 8GMrSwACBn1O6TtOVIrzpWDNqkeLaEGMyW5-A5Y6eZ0'
            }
        }).then(Response => {

            setPhotos(Response.data.results)
        })

    }, [text, PageNumber])


    const ImagesList = Photos?.map(obj => {
        return (
            <Card key={obj.id} OBG={obj} />
        )

    })

    const handleChange = (event, value) => {
       setPageNumber(value)
    };

    const SearchSubmitClick = (keyword) => {
        settext(keyword)
    }

    console.log(Photos)

    return (
        <div>
            <HeroBlock submitHandler={SearchSubmitClick} />

            <div className="CardList ">
                {ImagesList}
            </div>
            <div className='Pagination'>
                    <Stack spacing={2}>
                        <Typography>Page: {PageNumber}</Typography>
                        <Pagination count={10} page={PageNumber} onChange={handleChange} />
                    </Stack>

                </div>

        </div>


    )
}

export default CardList;






//Class Component

// class CardList extends React.Component {
//     constructor() {
//         super()

//         this.state = {
//             CardListData: [
//                 { id: 1, name: 'zeynab Hashemi', discription: 'helooooooo' },
//                 { id: 2, name: 'sara ahmadi', discription: 'helooooooo' },
//                 { id: 3, name: 'reza amini', discription: 'helooooooo' },
//                 { id: 4, name: 'maryam dana', discription: 'helooooooo' },
//                 { id: 5, name: 'amin amini', discription: 'helooooooo' },
//                 { id: 6, name: 'darya amini', discription: 'helooooooo' },
//                 { id: 7, name: 'zeynab Hashemi', discription: 'helooooooo' },
//                 { id: 8, name: 'zeynab Hashemi', discription: 'helooooooo' },
//                 { id: 9, name: 'zeynab Hashemi', discription: 'helooooooo' },


//             ]
//         }
//     }


//     RenderCardHandeler() {

//         return this.state.CardListData.map((item) => {
//             return (
//                 <div key={item.id}>
//                     <Card Name={item.name} Description={item.description} Id={item.id} />

//                 </div>
//             )
//         })


//     }


//     render() {
//         return (


//             <div className="ui grid ">

//           {this.RenderCardHandeler()}

//             </div>


//         )
//     }

// }


