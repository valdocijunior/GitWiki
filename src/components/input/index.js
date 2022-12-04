import React from 'react'

import { InputContainer } from './styles';

function Input({value, onChange}) {
  return (
    <InputContainer>
        <input value={value} onChange={onChange} onKeyPress={event => { if (event.key === 'Enter') { this.search()}}} />
    </InputContainer>
  )
}

export default Input