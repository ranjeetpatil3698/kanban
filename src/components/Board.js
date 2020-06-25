import React from 'react';
import Root from './Root';
import AddButton from './AddButton'
import NavBar from './NavBar';
import ColumnWrapper from './ColumnWrapper';
//TODO: implement drag and drop functionality 25/6/20
//TODO: Complete Navbar Comoponent,add component level state management, 26/6/20
function App() {
  return (
  <div>
    <NavBar/>
    <div>
    <ColumnWrapper>
    <Root />
      {/* <AddButton value="Column"/> */}
    </ColumnWrapper>
    </div>
    </div>
    
  );
}

export default App;
