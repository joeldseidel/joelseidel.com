import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import Task from './Task';

const Container = styled.div`
    margin: 8px;
    border: 2px solid #a2b0c3;
    box-shadow: 5px 5px 0px 0px #c1cad7;
    justify-content: space-between;
    align-items: stretch;
    flex-grow: 1;
`;

const TitleContainer = styled.div`
    background-color: #e0e5eb;
    border-bottom: 2px solid #a2b0c3;
`;

const Title = styled.h3`
    margin: 0;
    padding: 8px;
    color: #44546a;
    font-family: 'PT Sans Narrow', sans-serif;
`;

const TaskList = styled.div`
    padding: 8px;
    height: 100%;
`;

export default class Column extends React.Component {
    render() {
        return (
            <Container>
                <TitleContainer>
                    <Title>{this.props.column.title}</Title>
                </TitleContainer>
                <Droppable droppableId={this.props.column.id}>
                    {provided => (
                        <TaskList
                            ref={provided.innerRef}
                            {...provided.droppableProps}>
                            {this.props.tasks.map((task, index) => <Task key={task.id} task={task} index={index}/>)}
                            {provided.placeholder}
                        </TaskList>
                    )}
                </Droppable>
            </Container>
        );
    }
}