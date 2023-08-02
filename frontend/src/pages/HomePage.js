import React from 'react'
import { Container, Box, Text, Flex, TabPanel, TabPanels, Tab, TabList, Tabs } from "@chakra-ui/react";
import Login from '../components/Authentication/Login';
import Signup from '../components/Authentication/Signup';

const HomePage = () => {
  return (
    <Container maxW='xl' centerContent>
      <Flex
        justify='center'
        p={3}
        bg={"white"}
        w='100%'
        m='40px 0 15px 0'
        borderRadius='lg'
      >
        <Text fontSize='4xl' fontFamily='Work sans'>
          HushChat
        </Text>
      </Flex>
      <Box
        bg={"white"}
        w={"100%"}
        p={4}
        borderRadius={"lg"}
        borderWidth={"1px"}
      >
        <Tabs variant='soft-rounded' isFitted>
          <TabList>
            <Tab>Log In</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup /> 
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default HomePage
