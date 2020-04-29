import styled from 'styled-components';

export const MainBlock = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #FFF;
    margin: 0 2%;
    border-radius: 5px;
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
    overflow-y: scroll;
    padding: 20px;
`;