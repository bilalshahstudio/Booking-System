import React from 'react'
import '../../App.css'
import { Button, Flex, Typography } from "antd";

function AppHeader() {
  return (
    <Flex align='center' justify='space-between'>
      <Flex>
        <Typography.Text strong>Tourbay</Typography.Text>
      </Flex>
      <Flex>
        <Button type='link'>Tours</Button>
        <Button type='link'>Book Tour</Button>
        <Button type='link'>My Tours</Button>
        
      </Flex>
     <Flex>
      <Button style={{color:"#fffff", backgroundColor:"#F16B51"}} >Explore Now</Button>
      </Flex>
    </Flex>
  )
}

export default AppHeader