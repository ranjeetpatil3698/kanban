import React from 'react'
import Task from './components/Task';
import styled from 'styled-components';
import AddButton from './components/AddButton';
import ColumnHead from './components/ColumnHead';
export default function Root() {
  return (
    <Rowrapper>
      <ColumnHead/>
      {[1,2,3,4].map(el=><Task/>)}
      <AddButton value="task"/>
    </Rowrapper>
  )
}

const Rowrapper=styled.div`
display:flex;
flex-direction: column;
align-items:center;
margin:0 0.3rem;
`


