import React from 'react'
import styled from 'styled-components'

export default function ColumnHead() {
  return (
    <>
      <Input/>
    </>
  )
}

const Input=styled.input.attrs({ type: 'text' })`
background: #fff;
width:14.3rem;
padding:0.4rem 0.2rem;
border: 1px solid rgba(0, 0, 0, 0.1);
font-family: Lato;
font-style: normal;
font-weight: bold;
font-size: 1rem;
line-height: 14px;
color: #152766;

&:focus:{
  outline:none;
}
`
