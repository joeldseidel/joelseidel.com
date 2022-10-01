import React from "react";
import styled from 'styled-components';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from "./Column";
import InitialCardData from './InitialCardData';
import MeetJoel from "./content/MeetJoel";
import MeetFrank from "./content/MeetFrank";
import ViewResume from "./content/ViewResume";

const ProjectBoard = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: stretch;
`;

const Header = styled.div`
  height: 12rem;
  padding: 32px;
  margin-bottom: 1rem;
`;

const NameTitle = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 3.5rem;
  color: #44546a;
  font-family: 'PT Sans Narrow', sans-serif;
`;

const TagLineTitle = styled.p`
  width: 100%;
  text-align: center;
  font-size: 1.25rem;
  color: #44546a;
  font-family: 'PT Sans Narrow', sans-serif;
`;

const Instructions = styled.p`
  font-size: 0.95rem;
  color: #44546a;
  margin-left: 12px;
  font-family: 'PT Sans', sans-serif;
  @media(max-width: 768px) {
    text-align: center;
  }
`;

const ContentViewer = styled.div`
  min-height: 100vh;
  padding-top: 3rem;
`;

const Copyright = styled.div`
  border-top: 1px solid #e0e5eb;
  color: #c1cad7;
  font-size: 0.75rem;
  margin-top: 2rem;
  padding: 8px;
  margin-bottom: 0.75rem;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: InitialCardData,
      openModal: ""
    }
    this.contentViewRef = React.createRef();
    this.boardViewRef = React.createRef();
  }
  componentDidUpdate() {
    if(this.state.openModal !== ""){
      this.contentViewRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    if(this.state.board.columns.done.taskIds.length === 4) {
      alert("Thanks for stopping by! Here are some fireworks to celebrate getting to know me!");
    }
  }
  scrollToTop() {
    this.boardViewRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
  completeTask(source, draggableId) {
    const doneCol = this.state.board.columns["done"];
    const inProgCol = this.state.board.columns["inprogress"];
    const todoCol = this.state.board.columns["todo"];
    const newDoneTasks = Array.from(doneCol.taskIds);
    const newInProgTasks = Array.from(inProgCol.taskIds);
    const newToDoTasks = Array.from(todoCol.taskIds);
    newDoneTasks.push(inProgCol.taskIds[0]);
    newInProgTasks.splice(0, 1, draggableId);
    if(source.droppableId === "done") {
      newDoneTasks.splice(source.index, 1);
    } else {
      newToDoTasks.splice(source.index, 1);
    }
    const newDoneCol = {
      ...doneCol,
      taskIds: newDoneTasks
    };
    const newInProgCol = {
      ...inProgCol,
      taskIds: newInProgTasks
    };
    const newTodoCol = {
      ...todoCol,
      taskIds: newToDoTasks
    };
    const newState = {
      board: {
        ...this.state.board,
        columns: {
          "done": newDoneCol,
          "inprogress":newInProgCol,
          "todo": newTodoCol
        }
      },
      openModal: draggableId
    };
    this.setState(newState);
  }
  onDragEnd = result => {
    const { destination, source, draggableId } = result;
    if(!destination) {
      return;
    }
    if(destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }
    if(destination.droppableId === "inprogress" && this.state.board.columns["inprogress"].taskIds.length > 0) {
      this.completeTask(source, draggableId);
      return;
    }
    if(draggableId === "task-0" && (destination.droppableId === "todo" || destination.droppableId === "inprogress")) {
      alert('"What is done cannot be undone" - William Shakespeare, Macbeth');
      return;
    }
    const sourceColumn = this.state.board.columns[source.droppableId];
    const destinationColumn = this.state.board.columns[destination.droppableId];
    const sourceTaskIds = Array.from(sourceColumn.taskIds);
    const destinationTaskIds = Array.from(destinationColumn.taskIds);
    sourceTaskIds.splice(source.index, 1);
    destinationTaskIds.splice(destination.index, 0, draggableId);
    const newSourceColumn = {
      ...sourceColumn,
      taskIds: sourceTaskIds
    };
    const newDestinationColumn = {
      ...destinationColumn,
      taskIds: destinationTaskIds
    }
    const newState = {
      ...this.state,
      board: {
        ...this.state.board,
        columns: {
          ...this.state.board.columns,
          [sourceColumn.id]: newSourceColumn,
          [destinationColumn.id]: newDestinationColumn
        }
      }
    }
    if(destinationColumn.id === "inprogress") {
      newState.openModal = draggableId;
    } else {
      newState.openModal = "";
    }
    this.setState(newState);
  }
  render() {
    return (
      <>
      <div ref={this.boardViewRef} class={this.state.board.columns.done.taskIds.length === 4 ? "pyro" : ""}>
          <div class="before"></div>
          <div class="after"></div>
        <Header>
          <NameTitle>Joel Seidel</NameTitle>
          <TagLineTitle>Consultant&nbsp;&nbsp;|&nbsp;&nbsp;Leader&nbsp;&nbsp;|&nbsp;&nbsp;Developer</TagLineTitle>
        </Header>
        <div>
          <Instructions>Drag a task to in-progress to start the task</Instructions>
          <ProjectBoard>
            <DragDropContext onDragEnd={this.onDragEnd}>
              {
                this.state.board.columnOrder.map((columnId) => {
                  const column = this.state.board.columns[columnId];
                  const tasks = column.taskIds.map(taskId => this.state.board.tasks[taskId]);
                  return <Column key={column.id} column={column} tasks={tasks}/>;
                })
              }
            </DragDropContext>
          </ProjectBoard>
        </div>
      </div>
      <div ref={this.contentViewRef}></div>
      {
        (this.state.openModal !== "" && this.state.openModal !== "task-0") &&
        <ContentViewer>
          { this.state.openModal === "task-1" && <MeetJoel/> }
          { this.state.openModal === "task-2" && <MeetFrank/> }
          { this.state.openModal === "task-3" && <ViewResume /> }
        </ContentViewer>
      }
      <footer>
        <Copyright>© 2022 Joel Seidel</Copyright>
      </footer>
      </>
    );
  }
}

export default App;
