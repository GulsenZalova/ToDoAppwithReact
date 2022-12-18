import { useState } from 'react'
import Form from './components/form'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState("")
  const [addList,setAddList]=useState([])
  return (
    <div className="App">
      <Form 
      inputValue={inputValue} 
      setInputValue={setInputValue}
      addList={addList}
      setAddList={setAddList}
      />
    </div>
  )
}

export default App
