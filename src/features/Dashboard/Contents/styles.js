import styled from 'styled-components';

export const ContentBox = styled.div`
display: flex;
justify-content: center;
width: 100%;
@media only screen and (max-width: 600px) {
flex-direction :  column;
}
`;

export const Details = styled.div`
width: 20%;
text-align: center;
line-height: 35px;
font-size: 20px;
border: 6px solid #c9b5ab;
display: inline-block;
background-color: rgba(137, 198, 212, 0.84);
color: white;
padding: 5px 20px;
margin: 8px 0;
border: none;
cursor: pointer;
margin-right: 10px;
border-radius: 10px;
font-weight: 500;
a{color: antiquewhite;}

@media only screen and (max-width: 600px) {
    width: 100%;
    margin: 5px 0 0 0;
    text-align: center;
    line-height: 100%;
    font-size: 30px;
  }
  a{
    text-decoration: none;
    width: 100%;
    display: block;
  }
`;


