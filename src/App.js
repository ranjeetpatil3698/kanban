import React from 'react';
import styled from 'styled-components'
import Root from './Root';
import AddButton from './components/AddButton'
import NavBar from './components/NavBar';
//TODO: Complete Navbar Comoponent,add component level state management,implement drag and drop functionality 24/6/20
function App() {
  return (
  <BodyWrapper>
    <NavBar/>
    <Content>
    <ColumnWrapper>
      {[1,2,3,4,5].map(el=><Root/>)}
      <AddButton value="Column"/>
    </ColumnWrapper>
    </Content>
    </BodyWrapper>
    
  );
}
const ColumnWrapper=styled.div`
height: 100%;
display:flex;
`
const BodyWrapper=styled.div`
background:#F7F7F7;
width:100vw;
height:100vh;
`
const Content=styled.section`
border-top:1px solid rgba(47, 128, 237, 0.1);
width:100vw;
height:93vh;
margin:0 5rem;
padding:.5rem 0;
`
export default App;
