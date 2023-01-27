//import Definition  from "./definition";
import React, { useEffect, useRef, useState } from 'react';
import { Grommet,Box, Button, Heading, dark} from 'grommet';
import Word from "./word";


import Display from "./rightLetter";
import Definition from "./definition";
//import Letter from "./letter";
import RightLetter from './rightLetter';
import Attempt from './attempt';



    function Game(){
      let text = "nothing";
      const letterArray = Array.from(text);
      const testArray = [1,2,3];
      
      const [letters, setLetters]= useState(letterArray);
      useEffect(()=>{},[letters]); 
    
      const workLattice = [];
      letters.map((letter,idx)=>{
          workLattice[idx]=" ";
      })
  
      const [lattice,setLattice] = useState(workLattice);
      const flag = useRef(2);
     
      useEffect(()=>{},[lattice]); 
      
      const onHandleAttempt =(props)=>{
        const letterOfRec = letters[props.index].trim();
        const index=props.index;
        const tryLetter = props.letter.trim();
        console.log('letter rec is '+letterOfRec);
        console.log('tryLetter is '+tryLetter);
        console.log('props.index is '+props.index);
      
        if(tryLetter===letterOfRec){
           const newLattice = [...lattice];
           console.log('newLattice is '+newLattice);
           newLattice[props.index] = letterOfRec;               
           setLattice(newLattice);  
      }
    }

    


   
                      
      return(
        <div>
              {
                 lattice.map((letter,idx)=>{
                  return(
                    <Attempt letter={letter} index={idx} key={idx} handleAttempt={onHandleAttempt} />
                  )
                 })
              }
      
            
        </div>
      );
    }
    
  export default Game;