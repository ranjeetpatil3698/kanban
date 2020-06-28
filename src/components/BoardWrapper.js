import React, { useState } from "react";
import { Box, Flex } from "@chakra-ui/core";
import { DragDropContext } from "react-beautiful-dnd";
import Task from "./Task";
import TaskBoard from "./TaskBoard";
import initialData from "./data";
export default function BoardWrapper() {
  const [data, setData] = useState(initialData);
  const dragEnd = (result) => {
    console.log(result);
  };
  return (
    <Flex
      fontFamily="Source Sans Pro"
      backgroundColor="gray.300"
      w="full"
      h="full"
    >
      <DragDropContext onDragEnd={dragEnd}>
        {data.columnOrder.map((columnId) => {
          const column = data.columns[columnId];
          const tasks = column.taskIds.map((taskId) => data.tasks[taskId]);
          return <TaskBoard key={column.id} column={column} tasks={tasks} />;
        })}
      </DragDropContext>
    </Flex>
  );
}
