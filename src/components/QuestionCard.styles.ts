import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1100px;
  background: #ebfeff;
  
  padding: 20px;
  /*
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: 2px solid #0085a3;
  */

  background: #FFFFFF;
  box-shadow: 0px 10px 30px 5px rgba(204, 204, 204, 0.4);
  border-radius: 15px;
 
  text-align: center;
  p {
    font-size: 1rem;
  }
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;
  :hover {
    opacity: 0.8;
  }
  button {
    cursor: pointer;
    user-select: none;
    font-size: 0.8rem;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    background: ${({ correct, userClicked }) =>
      correct
        ? 'linear-gradient(90deg, #56FFA4, #59BC86)'
        : !correct && userClicked
        ? 'linear-gradient(90deg, #FF5656, #C16868)'
        : 'linear-gradient(90deg, #FF80AB, #FF80AB)'};
    border: none;
    
    border-radius: 15px;
    color: #fff;
    /*
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
    */
  }
`;