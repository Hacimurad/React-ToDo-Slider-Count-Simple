import React from "react";
import shortid from "shortid";

class TodoForm extends React.Component{
    state={
        text:""
    };

    handleChange=event=>{
        this.setState({
            [event.target.name]:event.target.value
        });
    };

    handleSubmit=event=>{
        event.preventDefault();
        this.props.onSubmit({
            id:shortid.generate(),
            text:this.state.text,
            complete:false
        });
        this.setState({
            text:''
        })
    }

    render(){
        return(
    
            <form onSubmit={this.handleSubmit}>
                    <input 
                    name="text"
                    onChange={this.handleChange}
                    value={this.state.text} 
                    placeholder="Todo.."/>
                <button onSubmit={this.handleSubmit}>Add todo</button>
            </form>


        )
    }
};

export default TodoForm;