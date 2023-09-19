import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import Welcom from './Welcome'

const root = ReactDOM.createRoot(document.getElementById('root'))
const element = (
  <div>
    <Welcom name='Sara' age={20} />
    <Welcom name='Helen' age={21} />
    <Welcom name='Nicolas' age={22} />
  </div>
)

// <React.StrictMode> */
// <App />
// </React.StrictMode>

root.render(element)
// const element = <h1>Hello, world!</h1>


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
