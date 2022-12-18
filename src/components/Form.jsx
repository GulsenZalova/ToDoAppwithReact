import React from 'react'
import TodoList from "./TodoList"
function Form({inputValue,setInputValue,addList,setAddList}) {
    const addWork=()=>{
        const id=addList.length+1
        if(inputValue!=""){
          setAddList(prev=>[...prev,
            { 
              id:id,
              text:inputValue
            }
          ])
        }else{
          alert("Zəhmət olmasa məlumat daxil edin!!!")
        }
        setInputValue("")
      }
  return (
   
    <div className='addInfo'>
    <input type="text" id="inputValue" value={inputValue} onInput={(e)=>setInputValue(e.target.value)} />
    <button onClick={()=>addWork()} className="addBtn">Add</button>
  <ul className='taskList'>
  <TodoList
    addList={addList}
    setAddList={setAddList}
    />
  </ul>
    </div>
  )
}
export default Form
