import styled from "styled-components";
import { shade } from 'polished';

//import signInBackground from '../../assets/camera.png';

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

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  place-content: center;

  width: 100%;
  max-width: 750px;
  margin-top: -36px;

  label {
    text-align: left;
    margin: 5px 0;
    font-weight: 500;
    color: #47474D;
  }

  input {
    background: #FFF;
    border-radius: 3px;
    border: 1px solid #ccc;
    padding: 13px;
    width: 50%;
    color: #47474D;

    display: flex;
    align-items: center;

    & + div {
      margin-top: 5px;
      margin-bottom: 20px;
    }

    input {
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
    }

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

  #thumbnail{
    margin-bottom: 20px;
    border: 1px dashed #47474D;
    background-size: cover;
    cursor: pointer;
    height: 378px;
    width: 648px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-top: 156px;
    margin-left: 78px;
  }

  #thumbnail input {
    display: none;
  }

  label#thumbnail.has-thumbnail {
    border: 0;
  }

  label#thumbnail.has-thumbnail img {
    display: none;
  }
`;

export const BTN = styled.div`
  border: none;

  .btn {
    position:absolute;
    top:660px;
    left:881px;
    border: none;
    
    background: #DC1637;
    height: 45px;
    font-weight: 500;
    border-radius: 3px;
    border: 0;
    padding: 0 16px;
    color: #FFF;
    
    transition: background-color 0.2s;
    &:hover {
      background: ${shade(0.2, '#DC1637')};
    } 
  }
`
