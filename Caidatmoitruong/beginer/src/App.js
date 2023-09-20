import { useState } from 'react'
import './App.css'
import Clock from './Clock'


function App() {
  const [name, setName] = useState('Patek philip')

  //*JSX
  return (
    <div className='App'>
      <button onClick={() => setName('Rolex')} >Change name</button>
      <Clock name={name} />
    </div>
  )
}

export default App
