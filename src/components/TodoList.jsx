import React from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import Search from "./search"

class TodoList extends React.Component{

    state={
        todos:[],
        todoToShow: "all",
        term:""
    };

    addTodo=(todo)=>{

        this.setState({
            todos:[todo,...this.state.todos]
        })
    }



    toggleComplete=id=>{
        this.setState({
            todos:this.state.todos.map(todo=>{
                if(todo.id===id){
                    return{
                        ...todo,
                        complete:!todo.complete

                    };
                }else{

                    return todo;
                }
            })
        })
    }

    showSpec=(show)=>{
        this.setState({
            todoToShow:show
        })
    }

    handleDelete=(id)=>{
        this.setState({
            todos:this.state.todos.filter(todo=>todo.id !== id)
        })
    }

    onUpdateSearch = (ter) =>{
        this.setState({
            term:ter.target.value
        });
    }

    render(){
        let todos=[];
     
        if (this.state.todoToShow === "all") {
            todos =this.state.todos;
          } else if (this.state.todoToShow === "active") {
            
            todos = this.state.todos.filter(todo => !todo.complete);

          } else if (this.state.todoToShow === "complete") {
            todos = this.state.todos.filter(todo => todo.complete);
          }

            let filterContacts=todos.filter(
                (todo)=>{
                    return todo.text.indexOf(this.state.term )!==-1;
                }
            )
        return(
          <div>
                    <TodoForm onSubmit={this.addTodo}/>
                {filterContacts.map(todo=>(

                    <Todo
                    key={todo.id}
                    toggleComplete={()=>this.toggleComplete(todo.id)}
                    deleteTodo={()=>this.handleDelete(todo.id)}
                    todo={todo}
                    />

                ))}
         <div>Todos Number:{this.state.todos.filter(todo=>!todo.complete).length}</div>
         <div>Complete:{this.state.todos.filter(todo=>todo.complete).length}</div>
        
                <div>
                    <button onClick={()=>this.showSpec("all")}>All</button>
                    <button onClick={()=>this.showSpec("active")}>Active</button>
                    <button onClick={()=>this.showSpec("complete")}>Complete</button>
                </div>
          
                <input type="text" 
                   className="form-control search-input"
                   placeholder="Search notes"
                   vaalue={this.state.term}
                   onChange = {this.onUpdateSearch}
                     />

                     <Search
                        value={this.state.term}
                         onUpdateSearch = {this.onUpdateSearch}
                     />

          </div>

        )
    }
};

export default TodoList;