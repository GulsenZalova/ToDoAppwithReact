import React from 'react'
function Todo({id,text}) {
  return (
       <li key={id} className='task'>{text}</li>
    
  )
}
export default Todo
