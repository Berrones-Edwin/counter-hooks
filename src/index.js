import React from 'react'
import ReactDOM from 'react-dom'
import CounterApp from './CounterApp';
// import PrimeraApp from './PrimeraApp'


import "./index.css";

const div = document.getElementById('root')

ReactDOM.render( <CounterApp value={7}  /> ,div)