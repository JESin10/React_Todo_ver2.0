import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <StHeader> 
      <div> 🔴 🟡 🟢 My Todo List </div>
      <div> React ➕ ❏ </div>
    </StHeader>
  )
}

export default Header;

const StHeader = styled.div `
  display: flex;
  height : 20px;
  background-color: #e1e1e1;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  font-size: 20px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`