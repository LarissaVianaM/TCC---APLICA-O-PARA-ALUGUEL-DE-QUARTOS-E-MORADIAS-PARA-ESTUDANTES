import styled  from 'styled-components';
import filter from '../../assets/filtro.png';

import { shade } from 'polished';

export const ContainerHeader = styled.div`
  width: 100%;
  background: #FFF;
`;

export const Header = styled.header`
  width: 95%;
  margin: 0 auto;
  background: #FFF;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  height: 80px;
  justify-content: space-between;

  strong {
    font-weight: 400;
    font-size: 25px;
    color: #47474D;
  }
`;

export const Container = styled.div`
  height: 100vh;
  width: 1290px;
  margin: 0 auto;
  display: flex;
  align-items: stretch;

  .btn {
    background: #DC1637;
    height: 56px;
    font-weight: 500;
    border-radius: 3px;
    border: 0;
    margin: -15px 0 0 290px;
    padding: 0 16px;
    color: #FFF;
    
    transition: background-color 0.2s;
    &:hover {
      background: ${shade(0.2, '#DC1637')};
    } 
  }
`;

export const Content = styled.div`
  display: flex;
  width: 750px;
  align-items: left;
  flex-direction: column;
  padding: 62px 0;

  h2 {
    color: #47474D;
    display: flex;
    text-align: left;
    font-size: 25px;
    font-weight: 500;
    margin: 0 0 25px 15px;
    padding: 10px;
    border-bottom: 2px solid #ccc;
  }
`;

export const  Ul = styled.ul`
  width: 100%;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  margin-bottom: 30px;

  li {
    background: #fff;
    padding: 30px;
    border-radius: 4px;

    header {
      width: 300px;
      height: 300px;
      background-size: cover;
      border-radius: 4px;
      margin-bottom: 20px
    }

    hr {
      color: #333;
      margin-bottom: 15px;
    }

    strong {
      margin-top: 10px;
      font-size: 20px;
      font-weight: 500;
      color: #47474D;
      margin-right: 10px;
    }

    span {
      margin-top: 4px;
      font-size: 20px;
      font-weight: 500;
      color: #DC1637;
      text-align: left;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${filter}) no-repeat center;
  margin-top: -159px;
`;