import styled from "styled-components";

export const Container = styled.div`
  background: #FFF;
  border-radius: 3px;
  border: 1px solid #ccc;
  padding: 13px;
  width: 100%;
  color: #47474D;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 5px;
    margin-bottom: 20px;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #47474D;

    &::placeholder {
      color: #47474D;
    }
  }

  > svg { 
   margin-right: 16px; 
  }
`; 