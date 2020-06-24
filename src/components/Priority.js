import React from 'react'
import styled from 'styled-components';

export default function Priority() {

  return (
    <Wrapper>
      <Batch>Low</Batch>
    </Wrapper>
  )
}

const Wrapper=styled.div`
position:relative;
width: 32px;
height: 1.1rem;
background: #E83882;
border-radius: 5px;
`
const Batch=styled.div`
position: absolute;
width: 19px;
height: 20px;
left: 0.3rem;
top: 0px;
color:#ffffff;
font-family: Lato;
font-style: normal;
font-weight: bold;
font-size: 8px;
line-height: 19px;
display: flex;
align-items: center;
text-transform: uppercase;
`;
