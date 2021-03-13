import React from "react";
import { Component } from "react";



class Counter extends Component{
  
        state={
            count:0
        };
    

    increment=()=>{
     
        this.setState({
            count:this.state.count+1
        })
    }
    render(){
        return(
            <div>
                <div>Count:{this.state.count}</div>
                <button onClick={this.increment}>increment</button>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count-1
                    })
                }}>Decrement</button>
            </div>
        )
    }
};

export default Counter;