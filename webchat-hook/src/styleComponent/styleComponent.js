import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 4%;
  background: ${props => props.primary ? "	#f6f6fc" : "white"};
`;

export const LeftICon = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  
`;
export const RightList = styled.div`
  width: 55%;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  float: left;
  align-items: center;
`;

export const UserName = styled.p`
 margin-top: 10px
`

export const Title = styled.h4`
  text-transform: uppercase;
  color: #9392ab;
  margin-top:10px
`;

export const ItemIcon = styled.div`
margin-top: 15px;
align-items: center;
padding-left: 10px
`

export const HeaderChat = styled.div`
display: flex;
margin: 10px 10px;
`

export const Text = styled.p`
color: #b2b1c4
`

export const Input = styled.input`
background: transparent;
border: none;

`
