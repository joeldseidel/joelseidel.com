import React from 'react';
import styled from 'styled-components';

const ResumeViewer = styled.iframe`
  min-height: 100vh;
  width: 100%;
`;

const DownloadButton = styled.button`
    border: 2px solid #a2b0c3;
    box-shadow: 2px 2px 0px 0px #c1cad7;
    background-color: #e0e5eb;
    text-align: center;
    padding: 8px;
    color: #44546a;
    font-family: 'PT Sans Narrow', sans-serif;
    margin-bottom: 1rem;
    margin-top: 3rem;
    cursor: pointer;
    &:hover {
        background-color: #92a4b9;
    }
`;

export default class ViewResume extends React.Component {
    render() {
        return (
            <div>
                <form target="_blank" action="Joel Seidel Resume.pdf">
                    <DownloadButton type="submit">Download Resume</DownloadButton>
                </form>
                <ResumeViewer title="Joel Seidel Resume" src="Joel Seidel Resume.pdf" width="100%" height="100%" />
            </div>
        );
    }
}