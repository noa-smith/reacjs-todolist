import { useState } from "react"
export default function TodoInput(props){
    const {handleAddTodos, todoValue, setTodoValue} = props
    return (
        <header>
            <input 
            value={todoValue}  
            onChange={(e) =>  setTodoValue(e.target.value) }
            onKeyDown={(e) => {
                if (e.key === "Enter" && todoValue != ""){
                    handleAddTodos(todoValue)
                    setTodoValue("")
                }
            }
    
            } placeholder="Enter todo..."/>
            <button onClick={() => {
                if(todoValue != ""){
                handleAddTodos(todoValue)
                setTodoValue('')
                }
            }}>Add</button>
        </header>
    )
}