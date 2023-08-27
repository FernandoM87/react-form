import * as React from 'react'
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';
import {
  Heading,
  Container,
  Flex,
  Button
} from '@chakra-ui/react';
            
export default function ApplicationsResult() {
    const navigate = useNavigate();

    return (
        <>

        <Container maxW="container.xl" p={0}>
            <Flex align="center" direction="column" w="full">
                <Heading p={10}>Thank you for your application!</Heading>
            
                <Button className="mt-3 mb-3" bg="#0d6efd" color="#fff" _hover={{ bgColor: "#0b5ed7", color: "#fff" }} onClick={() => navigate("/")}>Applications Form</Button>
            </Flex>
        </Container>
        </>
    )
    
}