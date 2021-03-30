import React from 'react'
import ReactDOM from 'react-dom'
import MultipleCustomHooks from './components/03.-Examples/MultipleCustomHooks';
// import SimpleFormCustomHooks from './components/03.-UseEffect/SimpleFormCustomHooks';
// import CounterApp from './CounterApp';
// import PrimeraApp from './PrimeraApp'
// import SimpleForm from './components/03.-UseEffect/SimpleForm'

import "./index.css";

const div = document.getElementById('root')

// ReactDOM.render( <CounterApp value={7}  /> ,div)
ReactDOM.render(<MultipleCustomHooks /> ,div)