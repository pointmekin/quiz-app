import styled, {createGlobalStyle} from 'styled-components';
import BGImage from './images/nattu-adnan.jpg'


export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    /*
    background-image: url(${BGImage});
    */
    background: #FAFAFA;
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }
  * {
    font-family: 'Catamaran', sans-serif;
    box-sizing: border-box;
  }
`;

export const FloatingCard = styled.div`
    max-width: 1100px;
    width: 100%;
    text-color = black;
    padding: 20px;
    margin-bottom: 20px;
    /*
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    border: 2px solid #FF80AB;
    */

    background: #FFFFFF;
    box-shadow: 0px 10px 30px 5px rgba(204, 204, 204, 0.4);
    border-radius: 15px;

    text-align: center;
    p {
    font-size: 1rem;

    .scpre {
        text-color: #000000
    }

    
}

`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .score {
    color: #000;
    font-size: 2rem;
    margin: 0;
  }
  h1 {
    font-family: 'Catamaran', sans-serif;
    /*
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    filter: drop-shadow(2px 2px #0085a3);
    */
    background: #000;
    font-weight: 400;
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    
    font-size: 70px;
    text-align: center;
    margin: 20px;
  }
  .start, .next {
    cursor: pointer;s
    color: #FF80AB;
    text-color: #ffffff;
    background-color: #FF80AB;
    border: 2px solid #FF80AB;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
    transition: all 0.3s ease;
    :hover {
        opacity: 0.8;
    }
    button {
      color: #ffffff;
    }
  }
  button{
    text-color: #ffffff;
  }
  .start {
    max-width: 200px;
  }
  .next-question{
      color: #ffffff;
  }


`;