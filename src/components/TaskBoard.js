import React from 'react'
import { Box,Flex} from "@chakra-ui/core";
import ColumnHeading from './ColumnHeading';

export default function TaskBoard(props) {
  return (
    <Box as="div" backgroundColor="gray.200" maxW="205px" p="2" rounded="sm" overflow="hidden" borderStyle="dashed" m="2" borderColor="gray.600">
      <ColumnHeading value="Board Name"/>
      <Flex flexDirection="column" justifyContent="center" alignContent="center">
      {props.children}
      </Flex>
    </Box>
  )
}
