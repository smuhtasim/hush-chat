import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";

const Login = () => {
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  const handleShow = () => {
    setShow(!show);
  };
  const submitHandler = () => {};
  return (
    <VStack>
      <FormControl id='email' isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          type='email'
          placeholder='Enter your email'
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </FormControl>
      <FormControl id='password' isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder='Enter your password'
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <InputRightElement width='4.5rem'>
            <Button h='1.75rem' size='sm' onClick={handleShow}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button
        colorScheme='blue'
        width='100%'
        style={{ marginTop: 15 }}
        onClick={submitHandler}
      >
        Log In
      </Button>
      <Button
        variant='solid'
        colorScheme='red'
        width='100%'
        onClick={()=>{
            setEmail("guest@example.com")
            setPassword("123456")
        }}
      >
        Be a guest
      </Button>
    </VStack>
  );
};

export default Login;
