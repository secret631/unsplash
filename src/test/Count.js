import React from 'react';

class Count extends React.Component{
    constructor(){
        super()
        this.state={Number:0}
    }
    DecrimentHandeler(){
        if(this.state.Number>0){
            this.setState({Number: this.state.Number-1})
    
        }
    }
    
    
    IncrimentHandeler(){
        this.setState({Number: this.state.Number+1})
    
    }
    
    render(){
        return(
            <div>
            <button onClick={()=> this.DecrimentHandeler()}>-</button>
            <p>{this.state.Number}</p>
            <button onClick={()=> this.IncrimentHandeler()}>+</button>
            
                </div>
         
        )
    }
}    
export default Count