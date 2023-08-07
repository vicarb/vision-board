'use client'
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const Sidebar = ({ visionItems }) => {
  return (
    <div className="sidebar">
      {visionItems.map((item, index) => (
        <Draggable key={item.id} draggableId={item.id} index={index}>
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              className="drag-item"
            >
              <img src={item.imageUrl} alt={item.text} className="sidebar-image" />
            </div>
          )}
        </Draggable>
      ))}
    </div>
  );
};

export default Sidebar;
