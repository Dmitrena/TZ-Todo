import styled ,{createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
   
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    
  }  
`;

export const Container = styled.div`
	width: 850px;
	margin-left:300px;
  margin-top:100px;
  padding: 50px 300px;
  z-index: 1;
  height: 50px;
  position: relative;
`;