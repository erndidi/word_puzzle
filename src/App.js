import React, { useEffect, useRef, useState } from 'react';
import { Grommet,Box, Button, Heading, dark, WorldMap} from 'grommet';
import {grommet } from 'grommet';

import Game from './component/game';
import Word from './component/word';



function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isNewGame, setNewGame] =useState();  
  const [letters, setLetters]= useState([]);
  const [lattice,setLattice] = useState([])
  const flag = useRef(2);
  useEffect(()=>{},[letters]); 
 

    
 const onHandleNewGame = (val)=>{
  console.log('current flag is '+flag.current);
  if(flag.current===1){
    setLetters(Array.from('bulwark'));
   // console.log('word length is '+letters.length);
    const workLattice = rtnEmptyArray(letters.length);
     setLattice(workLattice);
   //  console.log('lattice length is '+lattice.length);
     flag.current =2;
    }
     if(flag.current=2){
      setLetters(Array.from('nothing'));
      console.log('word length is '+letters.length);
      const workLattice = rtnEmptyArray(letters.length);  
       setLattice(workLattice);
       console.log('lattice length is '+lattice.length);
        flag.current = 1;
     }
  }
  console.log('word is '+letters)

const rtnEmptyArray = (lnth)=>{
   return Array.apply(null, Array(lnth)).map(function () {});
}

 
return (
  <Grommet full theme={grommet} >
      <Box pad="large" fill align='center' justify='center'>
        <Heading level="1">Word Puzzle</Heading>
        <Word letters={letters} lattice={lattice}></Word>
        
          
      </Box>
      <Button
             label="New Game!"
             primary
             alignSelf='center'
             margin="large"
             onClick={onHandleNewGame}

            />
          <Button
             label="Give me a hint!"
             primary
             alignSelf='center'
             margin="large"
         
            
            />
</Grommet>
);


}


 


export default App;
