import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const Container = styled.div`
    border: 1px solid #a2b0c3;
    padding: 8px;
    margin-bottom: 8px;
    height: 4rem;
    background-color: white;
    color: #44546a;
    max-width: 100%;
    font-family: 'PT Sans Narrow', sans-serif;
`;

export default class Task extends React.Component {
    render() {
        return (
            <Draggable draggableId={this.props.task.id} index={this.props.index}>
                {(provided) => (
                    <Container
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}>
                            {this.props.task.title}
                    </Container>
                )}
            </Draggable>
        );
    }
}