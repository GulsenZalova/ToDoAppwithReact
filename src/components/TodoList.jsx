import React from 'react'
import Todo from './Todo'
function TodoList({addList,setAddList}) {
  return (
    <div>
     {
        addList.map((element)=>(
            <Todo
             id={element.id}
             text={element.text}
            />
        ))
     }
    </div>
  )
}

export default TodoList
