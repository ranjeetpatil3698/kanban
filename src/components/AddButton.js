import React from 'react'
import styled from 'styled-components'
export default function AddButton({value}) {
  return (
    <ButtonWrapper>
      <AddItem>+ Add {value}</AddItem>
    </ButtonWrapper>
  )
}

const ButtonWrapper=styled.div`
postion:relative;
width: 61px;
height: 24px;
`

const AddItem=styled.div`
position: absolute;
padding:0.5rem;
font-family: Lato;
font-style: normal;
font-weight: bold;
font-size: 0.8rem;
display: flex;
align-items: center;
text-transform: uppercase;
color: #2F80ED;
cursor:pointer;
`
