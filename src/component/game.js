//import Definition  from "./definition";
import React, { useEffect, useRef, useState } from 'react';
import { Grommet,Box, Button, Heading, dark} from 'grommet';
import Word from "./word";


import Display from "./rightLetter";
import Definition from "./definition";
//import Letter from "./letter";
import RightLetter from './rightLetter';



    function Game(props){
      const workWord = useRef(props.word);
      const [letterOfRec, setLetterOfRec] = useState(props.word);
      const [lattice, setLattice] = useState(props.lattice);
      //const [letters, setLetters] = useState(Array.from(props.word));


      

    


   
                
return(
  <div>

  
    
    <Definition/>


  
             
    

         
       
        
       
  </div>
);
    }
    
  export default Game;