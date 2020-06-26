import React from 'react';
import { Box ,Badge,Avatar,AvatarGroup} from "@chakra-ui/core";
//TODO:add svg icon addMember at + button
import EditableInput from './EditableInput';


export default function Task(props) {  
  const property={
    title:'This is task'
  }

  return (
    <Box  borderWidth="1px" m="1" rounded="lg" overflow="hidden" as="div" backgroundColor="gray.100" boxShadow="md" width="48">
      <Box p="3">
      <Badge rounded="full" px="2" variantColor="teal">
            low
      </Badge>
        <Box
          mt="3"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          <EditableInput value={property.title}/>
        </Box>
        <AvatarGroup size="sm" max={2} m="1">
        <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
        <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
        <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
        <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
        <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
        <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
        </AvatarGroup>
      </Box>
    </Box>
  )
}


