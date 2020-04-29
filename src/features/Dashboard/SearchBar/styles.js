import styled from 'styled-components';

export const SearchBox = styled.div`
width: 45%;
display: block;
margin: 0 auto;
@media only screen and (max-width: 600px) {
    width: 85%;
    margin: 0 5px;
}

input#search-bar{
    margin: 0 auto;
    width: 100%;
    height: 50px;
    padding: 0 20px;
    font-size: 1rem;
    border: 1px solid #dcdcdc;
    border-radius: 25px;
    outline: none;
    // &:focus{
    //   border: 1px solid #008ABF;
    //   transition: 0.35s ease;
    //   color: #008ABF;
    //   &::-webkit-input-placeholder{
    //     transition: opacity 0.45s ease; 
    //       opacity: 0;
    //    }
    //   &::-moz-placeholder {
    //     transition: opacity 0.45s ease; 
    //       opacity: 0;
    //    }
    //   &:-ms-placeholder {
    //    transition: opacity 0.45s ease; 
    //      opacity: 0;
    //    }    
    //  }
   }
  

`;

export const Icon = styled.div`
    color: #dcdcdc;
    background-color: linear-gradient(45deg, #044348b3, #ad84397a);
    font-size: 28px;
    margin: 5px 10px 0 10px;
    position: relative;
    float: right;
    top: -47px;
    right: -17px;
`;


