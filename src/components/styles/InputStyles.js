import styled from 'styled-components';




export const ButtonContainer = styled.div`
  position: relative;
`;



export const HeroButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 31px;
  height: 30px;
  left: 160.72px;
  top: -27px;
  z-index:1;
  background: linear-gradient(83.53deg, #B114FF -13.77%, #FF1493 118.89%);

 
  font-size: 10px;
  font-weight: 5;
  line-height: 33px;
  letter-spacing: 0.02em;
 
  padding: 14px 28px 14px 28px;

  text-transform: uppercase;
  border-radius: 4px;
  border: none;
  color: #fff;
  cursor: pointer;
`;

export const Counter = styled.div`
position:relative;
  padding:10px;
`;

export const Todo = styled.h3`
margin-left: -40px;
  width: 500px
`;