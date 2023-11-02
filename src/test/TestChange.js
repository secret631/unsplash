import React from "react";

class TestChange extends React.Component{
    constructor(){
        super()
        this.state ={name:''}
    }

    ChangeInpute(event){
        // console.log(event)
        this.setState({name: event.target.value})

    }
p
    ChangeInuteButton(){
        this.setState({name:'Ali'})

    }


    render(){
        return(
            <div style={{padding:'10px', marginBottom:'10px'}}>
                <input onChange={this.ChangeInpute.bind(this)} />
                <button style={{marginLeft:'5px'}} onClick={()=>this.ChangeInuteButton()}> search </button>
                <p>{this.state.name}</p>
            </div>
        )
    }
}
export default TestChange;