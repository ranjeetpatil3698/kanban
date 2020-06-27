import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { Box, Flex } from "@chakra-ui/core";
import EditableInput from "./EditableInput";
import Task from "./Task";

export default function TaskBoard(props) {
  return (
    <Droppable droppableId={props.column.id}>
      {(provided) => (
        <Box
          as="div"
          backgroundColor="gray.200"
          maxW="205px"
          p="2"
          rounded="sm"
          overflow="hidden"
          borderStyle="dashed"
          m="2"
          borderColor="gray.600"
          ref={provided.innerRef}
        >
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignContent="center"
          >
            <EditableInput value="Board Name" />
            <div>
              {props.tasks.map((task, index) => (
                <Task key={task.id} task={task} index={index} />
              ))}
              {provided.placeholder}
            </div>
          </Flex>
        </Box>
      )}
    </Droppable>
  );
}
