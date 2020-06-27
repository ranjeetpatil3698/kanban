import React from "react";
import { Box, Badge, Avatar, AvatarGroup } from "@chakra-ui/core";
//TODO:add svg icon addMember at + button
import EditableInput from "./EditableInput";
import { Draggable } from "react-beautiful-dnd";
export default function Task(props) {
  return (
    <Draggable
      draggableId={props.task.id}
      key={props.task.id}
      index={props.index}
    >
      {(provided) => (
        <Box
          borderWidth="1px"
          m="1"
          rounded="lg"
          overflow="hidden"
          as="div"
          backgroundColor="gray.100"
          boxShadow="md"
          width="48"
          {...provided.dragHandleProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Box p="3">
            <Badge rounded="full" px="2" variantColor={props.task.priority[0]}>
              {props.task.priority[1]}
            </Badge>
            <Box mt="3" as="h4" lineHeight="tight" isTruncated>
              <EditableInput value={props.task.content} />
            </Box>
            <AvatarGroup size="sm" max={2} m="1">
              <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
              <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
            </AvatarGroup>
          </Box>
        </Box>
      )}
    </Draggable>
  );
}
