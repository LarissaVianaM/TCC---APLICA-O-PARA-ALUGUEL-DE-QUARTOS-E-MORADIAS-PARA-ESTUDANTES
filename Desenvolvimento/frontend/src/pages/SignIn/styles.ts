import styled from "styled-components";
import { shade } from 'polished';

import signInBackground from '../../assets/sigin-bg.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  place-content: center;

  width: 100%;
  max-width: 750px;

  form {
    margin: 15px 0;
    width: 300px;

    h1 {
      margin-bottom: 24px;
      color: #000;
      text-align: center;
    }
    p {
      margin-bottom: 24px;
      color: #312e38;
      text-align: center;
    }

    

    a {
      margin-top: 24px;
      color: #312e38;
      text-align: left;
      transition: color 0.2s;

      &:hover {
        color: ${shade(7, '#000')};
      } 
    }

    button {
      background: #DC1637;
      height: 56px;
      font-weight: 500;
      border-radius: 3px;
      border: 0;
      margin-top: 16px;
      padding: 0 16px;
      color: #FFF;
      width: 100%;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#DC1637')};
      } 
    }
  }

  > button {
      background: #f4EDE8;
      border: 1px solid #333;
      height: 56px;
      font-weight: 500;
      border-radius: 3px;
      padding: 0 16px;
      color: #312e38;
      width: 300px;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.1, '#fff')};
      } 
    }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackground}) no-repeat center;
`;

