import React from 'react'
import {Box,Flex} from '@chakra-ui/core'
import  Task from './Task'
import TaskBoard from './TaskBoard';

export default function BoardWrapper() {
  return (
      <Flex fontFamily='Source Sans Pro' backgroundColor="gray.500">
      <TaskBoard>
        <Task/>
        <Task/>
        </TaskBoard>
        <TaskBoard>
        <Task/>
        <Task/>
        </TaskBoard>
      </Flex> 
  )
}
