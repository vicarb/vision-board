'use client'
import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Sidebar from './Sidebar';
import Whiteboard from './Whiteboard';

const mockData = [
  {
    id: '1',
    imageUrl: 'https://via.placeholder.com/100',
    text: 'Image 1',
  },
  {
    id: '2',
    imageUrl: 'https://via.placeholder.com/100',
    text: 'Image 2',
  },
  // Add more mock data items as needed
];

const VisionBoard = () => {
  const [visionItems] = useState(mockData);
  const [droppedItems, setDroppedItems] = useState([]);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedItems = Array.from(droppedItems);
    const [movedItem] = reorderedItems.splice(result.source.index, 1);
    reorderedItems.splice(result.destination.index, 0, movedItem);

    setDroppedItems(reorderedItems);
  };

  return (
    <div className="vision-board-container">
      <h1>Vision Board</h1>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Sidebar visionItems={visionItems} />
        <Whiteboard droppedItems={droppedItems} />
      </DragDropContext>
    </div>
  );
};

export default VisionBoard;
