import { useState } from 'react'
import './App.css'
import Clock from './Clock'
import BareInput from './BareInput'
import Layout from './Layout'


function App() {
  // const [name, setName] = useState('Patek philip')
  // const [visible, setVisible] = useState(true)
  //*JSX
  return (
    <div className='App'>
      {/* <button onClick={() => setName('Rolex')} >Change name</button>
      <button onClick={() => setVisible(false)} >Hide clock component</button>

      {visible && <Clock name={name} />} */}
      <Layout>
        <h1>Hello</h1>
        <BareInput type='password' value='100' autoFocus className='input-control' onChange={() => { }} />

      </Layout>
    </div>
  )
}

export default App
