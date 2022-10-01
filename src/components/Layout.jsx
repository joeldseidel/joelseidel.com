import styled from "styled-components";

export const ColumnContainer = styled.div`
    margin-top: 1rem;
    display: flex;
    @media(max-width: 768px) {
        flex-direction:column-reverse;
    }
    padding-left: 8px;
    padding-right: 8px;
`;

export const TextColumn = styled.div`
    flex: 3 1 0;
    padding: 8px;
`;

export const PhotoColumn = styled.div`
    flex: 1 1 0;
    padding-right: 8px;
    padding-left: 8px;
`;

export const Image = styled.img`
    object-fit: cover;
    height: auto;
    width: 100%;
    max-width: 100%;
    border-bottom: 2px solid #a2b0c3;
`;

export const Container = styled.div`
    margin-top: 8px;
    border: 2px solid #a2b0c3;
    box-shadow: 5px 5px 0px 0px #c1cad7;
    justify-content: space-between;
    flex-grow: 1;
`;

export const TitleContainer = styled.div`
    background-color: #e0e5eb;
    border-bottom: 2px solid #a2b0c3;
`;

export const Title = styled.h3`
    margin: 0;
    width: 100%;
    text-align: center;
    padding: 8px;
    color: #44546a;
    font-family: 'PT Sans Narrow', sans-serif;
`;

export const InfoTable = styled.table`
    padding: 2px;
    width: 100%;
    vertical-align: top;
    table-layout: fixed;
    font-family: 'PT Sans Narrow', sans-serif;
    border-collapse: collapse;
    & td {
        border-bottom: 1px solid #c1cad7;
        padding: 2px 4px 2px 4px;
    }
`;

export const ContentHeader = styled.div`
    background-color: #e0e5eb;
    border: 2px solid #a2b0c3;
    box-shadow: 5px 5px 0px 0px #c1cad7;
    text-align: center;
    padding: 0;
`;