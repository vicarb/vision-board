'use client'
import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import VisionItem from '../VisionItem/VisionItem';

const Whiteboard = ({ droppedItems }) => {
  return (
    <div className="whiteboard">
      <Droppable droppableId="droppable-area">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {droppedItems.map((item, index) => (
              <VisionItem key={item.id} imageUrl={item.imageUrl} text={item.text} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Whiteboard;