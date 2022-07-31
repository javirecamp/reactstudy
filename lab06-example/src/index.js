import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Library from './chap03/Library';
// import Clock from './chap04/Clock';
// import SampleParent from './sample/Parent';
// import Accommodate from './chap07/Acommodate';
import Toggle from './chap08/Toggle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <SampleParent /> */}
    {/* <Accommodate /> */}
    <Toggle />
  </React.StrictMode>
)
// const root = ReactDOM.createRoot(document.getElementById('root'));
// setInterval(()=>{
//   root.render(
//     <React.StrictMode>
//       <Clock/>
//     </React.StrictMode>,
//     document.getElementById(root)
//   )
// },1000)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
