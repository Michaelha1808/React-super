import { useState } from 'react'
import './App.css'
import Clock from './Clock'


function App() {
  const [name, setName] = useState('Patek philip')
  const [visible, setVisible] = useState(true)
  //*JSX
  return (
    <div className='App'>
      <button onClick={() => setName('Rolex')} >Change name</button>
      <button onClick={() => setVisible(false)} >Hide clock component</button>

      {visible && <Clock name={name} />}
    </div>
  )
}

export default App
