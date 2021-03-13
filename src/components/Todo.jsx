import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default props=>
(
<div style={{display:"flex",justifyContent:"center"}}>

            <div  
                    style={{
                        textDecoration: props.todo.complete?"line-through":""
                    }}
                    onClick={props.toggleComplete}>

                        {props.todo.text}
            </div>

        <button onClick={props.deleteTodo}>X</button>

</div>);