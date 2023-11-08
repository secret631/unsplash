import React from 'react';
import './Card.css'
import UseProgressiveImage from '../Hoc/UseProgressiveImage';




const Card = (props)=>{
    console.log(props.OBG.urls)


    const[src, {blur}]=UseProgressiveImage(props.OBG.urls.regular , props.OBG.urls.full)

    return(
        <div className='CardImage'>
            <img src={src}  style={{filter: blur? "(5px)" : "none" ,
             transition:blur? "none" : "filter 0.3 ease-out"}} />

        </div>
    )
}




//Class Component

// class Card extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = { Number: 0 }


//     }

//     SendDataToServer() {
//         // console.log(this.props.Id)
//         // console.log(this.state.Number)

//         console.log( {id:this.props.Id, count:this.state.Number})
//     }

//     DecrimentHandeler() {
//         if (this.state.Number > 0) {
//             this.setState({ Number: this.state.Number - 1 })

//         }
//     }


//     IncrimentHandeler() {
//         this.setState({ Number: this.state.Number + 1 })

//     }

//     render() {


//         return (

//             // Card html & css

//             <div style={{padding:'10px'}} className="four wide column">

//                 <div style={{  marginBottom:'5px'}} className="ui cards">
//                     <div className="card">

//                         <div className="content">

//                             {/* <div className="id">{this.props.Id}</div> */}
//                             <img className='image'>{this.props.IMG}</img>

//                             <div className="header">{this.props.Name}</div>
//                             <div className="description">{this.props.Description}</div>
//                         </div>

//                         {/* Count html & css */}
//                         <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', justifyItems:'center' }} className='count'>

//                             <button onClick={() => this.SendDataToServer(this.props.Id)}>buy</button>
//                             <div style={{ display: 'flex', gap: '10px' }}>

//                                 <button onClick={() => this.DecrimentHandeler()}>-</button>
//                                 <p>{this.state.Number}</p>
//                                 <button onClick={() => this.IncrimentHandeler()}>+</button>
//                             </div>


//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }





// }


export default Card;
