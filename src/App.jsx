import ReactDOM from 'react-dom'
import React from 'react'
import './App.css'
import Home from '../src/pages/Home'
import ErrorBoundary from './ErrorBoundary'




function App() {
  return (
   <ErrorBoundary fallback="There are Bugs in this b****  🪲🦗🦗 ---🔫">
    <div>
      <Home />
    </div>
 </ErrorBoundary>
  );
}

export default App;
