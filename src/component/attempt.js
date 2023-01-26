import React, { useState, useEffect, useRef } from "react";
import './word.style.css';

function Attempt(props) {
  const [letter, setLetter] = useState(props.letter);
  //const inputRef = useRef(null);
  //const canShow = props.canShow;
  const [attempt, setAttempt] = useState('');
 

  const handleInputChange=(e)=>{
    console.log(e);
    const incomingLetter = e.target.value;  
    const index = e.target.getAttribute("data-index");
    let workAttempt = {letter:incomingLetter, index:index};
     setAttempt(workAttempt);   
    props.handleAttempt(workAttempt);

  }

 useEffect(()=>{},[letter]);

  //const [letter, setLetter] = 
 //const [letter, setLetter] =
    return (
      <div>
          <input type="text"  value={props.letter}  data-index = {props.index} onChange={handleInputChange}></input>
      </div>
    );
  }
  
  export default Attempt;