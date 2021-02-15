import React, { useState } from "react";
import "./button.css";

const Button = (props) => {


  
    return (

        <div className="btn-container">
      <button className="game-btn" onClick={props.onClickHandler}disabled={props.Winner ==""?false:true} >{props.currentgame} </button>
      </div>
    )
}

export default Button;