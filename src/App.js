import React, { useEffect, useRef, useState } from 'react';
import { Grommet,Box, Button, Heading, dark, WorldMap} from 'grommet';
import {grommet } from 'grommet';

import Game from './component/game';
import Word from './component/word';



function App() {
  const [darkMode, setDarkMode] = useState(false);

 
return (
  <Grommet full theme={grommet} >
      <Box pad="large" fill align='center' justify='center'>
        <Heading level="1">Word Puzzle</Heading>
        <Game></Game>
       
       
          
      </Box>
    
</Grommet>
);


}


 


export default App;
