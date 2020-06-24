import React from 'react'
import styled from 'styled-components'
import Priority from './Priority';

export default function Task() {  
  return (
      <Card>
      <Priority/>
      <Header>Create landing page variations for porfolio website</Header> 
      <BorderButton>+</BorderButton>
      </Card>
  )
}

const Card=styled.div`
width: 211px;
height: 143px;
background: #FFFFFF;
box-shadow: 0px 6px 15px rgba(47, 128, 237, 0.1);
padding:0.5rem 0.8rem;
border:1px solid rgba(47, 128, 237, 0.1);
cursor:pointer;
`;

const Header=styled.h1`
font-family: Lato;
font-style: normal;
font-weight: bold;
font-size: 1rem;
line-height: 14px;
color: #152766;
`

const BorderButton=styled.button`
border-radius: 50%;
width: 25px;
bottom: 14.5%;
border: 1px dashed rgba(21, 39, 102, 0.35);
box-sizing: border-box;
cursor:pointer;
`
