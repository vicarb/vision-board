'use client'
'use client'

import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const initialTasks = [
  {
    id: "task1",
    title: "Task 1",
    description: "This is the first task",
    status: "To Do",
  },
  {
    id: "task2",
    title: "Task 2",
    description: "This is the second task",
    status: "In Progress",
  },
  {
    id: "task3",
    title: "Task 3",
    description: "This is the third task",
    status: "Done",
  },
];

const KanbanBoard = () => {
    const [tasks, setTasks] = useState(initialTasks);
  
    const onDragStart = (start) => {
      console.log("Dragging started from index", start.source.index);
    };
  
    const onDragUpdate = (update) => {
      console.log("Dragging is in progress...");
    };
  
    const onDragEnd = (result) => {
      console.log("Dragging ended");
  
      if (!result.destination) {
        return;
      }
  
      const sourceIndex = result.source.index;
      const destinationIndex = result.destination.index;
      const sourceStatus = result.source.droppableId;
      const destinationStatus = result.destination.droppableId;
  
      if (sourceStatus === destinationStatus) {
        const reorderedTasks = Array.from(tasks);
        const movedTask = reorderedTasks[sourceIndex];
        reorderedTasks.splice(sourceIndex, 1);
        reorderedTasks.splice(destinationIndex, 0, movedTask);
  
        setTasks(reorderedTasks);
      } else {
        const movedTask = tasks[sourceIndex];
  
        setTasks((prevTasks) =>
          prevTasks.filter((_, index) => index !== sourceIndex)
        );
        setTasks((prevTasks) =>
          [
            ...prevTasks.slice(0, destinationIndex),
            movedTask,
            ...prevTasks.slice(destinationIndex),
          ]
        );
      }
    };
  
    return (
      <DragDropContext
        onDragStart={onDragStart}
        onDragUpdate={onDragUpdate}
        onDragEnd={onDragEnd}
      >
        <div style={{ display: "flex" }}>
          <Droppable droppableId="todo" type="task">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={{
                  width: "33%",
                  minHeight: "400px",
                  padding: "16px",
                  backgroundColor: "lightblue",
                }}
              >
                <h2>To Do</h2>
                {tasks.map((task, index) =>
                  task.status === "To Do" ? (
                    <Draggable key={task.id} draggableId={task.id} index={index}>
                      {(provided) => (
                        <div
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                          style={{
                            margin: "8px",
                            padding: "8px",
                            backgroundColor: "white",
                          }}
                        >
                          {task.title}
                        </div>
                      )}
                    </Draggable>
                  ) : null
                )}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
  
          <Droppable droppableId="inProgress" type="task">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={{
                  width: "33%",
                  minHeight: "400px",
                  padding: "16px",
                  backgroundColor: "lightgreen",
                }}
              >
                <h2>In Progress</h2>
                {tasks.map((task, index) =>
                  task.status === "In Progress" ? (
                    <Draggable key={task.id} draggableId={task.id} index={index}>
                      {(provided) => (
                        <div
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                          style={{
                            margin: "8px",
                            padding: "8px",
                            backgroundColor: "white",
                          }}
                        >
                          {task.title}
                        </div>
                      )}
                    </Draggable>
                  ) : null
                )}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
  
          <Droppable droppableId="done" type="task">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={{
                  width: "33%",
                  minHeight: "400px",
                  padding: "16px",
                  backgroundColor: "lightpink",
                }}
              >
                <h2>Done</h2>
                {tasks.map((task, index) =>
                  task.status === "Done" ? (
                    <Draggable key={task.id} draggableId={task.id} index={index}>
                      {(provided) => (
                        <div
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                          style={{
                            margin: "8px",
                            padding: "8px",
                            backgroundColor: "white",
                          }}
                        >
                          {task.title}
                        </div>
                      )}
                    </Draggable>
                  ) : null
                )}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    );
  };
  
  export default KanbanBoard;