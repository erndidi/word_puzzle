import React, { Component }  from 'react';
function Definition(props) {
  console.log("definitions are "+props.definitions);
    return (
      <div>
        <ul>
           {
              props.definitions.map((definition)=>{
                return(
                  <li data-key={definition.isCorrect}>
                      {definition.definition}
                  </li>                 )
              })
          }
        </ul>
         
      </div>
    );
  }
  
  export default Definition;