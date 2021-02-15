import React from 'react';
import './App.css';
import Tictactoe from './pages/tictactoe'
function App() {
  return (
    <div> 
    <div className="header">
    <h1> Tic Tac Toe </h1>
 </div>
      <Tictactoe/>
    </div>
  );
}

export default App;
