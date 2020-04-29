import styled from 'styled-components';

export const MainBlock = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #FFF;
    margin: 0 2%;
    border-radius: 5px;
    #page-numbers {
        list-style: none;
        display: flex;
      }
    .active{
        background-color: #dfb959 !important;
    }
    #page-numbers > li {
        margin-right: 0.6em;
        color: #000;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        cursor: pointer;
        background-color: #dcdcdc;
        width: 20px;
        border-radius: 5px;
        height: 20px;
        font-size: 12px;
        font-weight: 500;
        padding: 3px;
    }
`;

export const DocBox = styled.div`
    border: 1px solid #dcdcdc;
    padding: 10px;
    margin: 10px;
    position: relative;
    font-family: Bluu Next,serif;
`;

export const BookBox = styled.div`
    display: flex;
`;

export const BookImg = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50px;
`;

export const BookName = styled.div`
    font-size: 16px;
    font-weight: 600;
    color: darkcyan;
    margin: 0 10px;
    font-family: Bluu Next,serif;
    text-align: left;
`;

export const BookLink = styled.div`
    margin-top: 10px;
    color: #848282;
    font-size: 13px;
    cursor: pointer;
`;

export const LoadingImg = styled.img`
    width: 200px;
    height: 200px;
`;

export const Sub1 = styled.div`
    flex: 1;
`;

export const Sub2 = styled.div`
    flex: 2;
`;

export const Panel = styled.div`
    height: 200px;
    overflow-y: auto;
    padding: 20px;
    border-top: 1px solid;
    margin: 45px;
`;

export const InfoVals = styled.div`
    font-size: 14px;
    margin : 0 0 10px 0;

`;

export const QuoteBox = styled.div`
    margin : 10px;
    font-family: fantasy;
    color: darkgoldenrod;
    .q {
        quotes: "“" "”" "‘" "’";
    }
    .q::before {
        content: open-quote;
    }
    .q::after {
        content: close-quote;
    }
`;

export const InfoText = styled.div`
    font-size: 11px;
    text-align: right;
    display: flex;
    flex-direction: column;
`;
