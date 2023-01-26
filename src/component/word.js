import React, { useEffect, useState } from 'react';
import Attempt from './attempt';




function Word(props) {
  const [letters_of_rec, setLetterOfRec] = useState(props.letters);
  const [lattice, setLattice] = useState(props.lattice);
  useEffect(()=>{ },[lattice]);       
               

  

		
 const onHandleAttempt = (attempt) =>{
  const letterOfRec = letters_of_rec[attempt.index];

  if(attempt.letter === letterOfRec){
     //const newViewList = [...view_list];
     const newLattice = [...lattice];
    // newViewList[attempt.index]='inView';   
    newLattice[attempt.index] = attempt.letter;    
     //console.log('new leter list '+newLetterList);
     setLattice(newLattice);  
     //setViewList(newViewList);
   
    
  }
 
}
  

 
      return(
        <div>   
             {
                  lattice.map((letter,idx)=>{
                    return(
                      <Attempt letter={letter} key={idx} index = {idx} handleAttempt={onHandleAttempt}></Attempt>
                    )                       
                  })
                 
             }
            
                
            
        </div>
       
      );
    }

  
  export default Word;