import styled from "styled-components";

export const Nava = styled.div`
  background-color: none;
  height: 100vh;
  margin-left:33vw;
  width: 66vw;
  padding: 0;

  @media screen and (max-width: 550px) {
  
    background-color: ${(props) => (props.sdb ? "rgb(69, 42, 122)" : null)};
   
  }
`;
