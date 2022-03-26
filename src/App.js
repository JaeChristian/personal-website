import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import './libs/styles.css';
import Home from './pages/home.js'
import theme from "./libs/theme.js";
import Navbar from "./components/navbar.js";
import Projects from './pages/projects.js';
import Posts from "./pages/posts.js";
import PageManager from "./components/page.js";
import React from 'react';
import {Box, useColorModeValue, Container} from "@chakra-ui/react";
import {useState} from "react";

function App() {
  const topMessageColor = useColorModeValue('whiteAlpha.200', 'whiteAlpha.200')
  const [TextMessage, setTextMessage] = useState("Hey there, I'm a Software Development student based in Canada!");
  const [Page, setPage] = useState("home");
  console.log("version 5");
  return (
    <ChakraProvider theme={theme}>
      <Navbar setPage={setPage}/>
      <Container mt={{base: 20, md: 20}} p={{base: 6, md: 0}} pb={{base: 0}} pt={{base:0}} maxWidth={{md: "container.sm"}}>
        <Box borderRadius="lg" bg={topMessageColor} p={3} mb={6} align="center" boxShadow="0 5px 4px rgba(0,0,0,.02), 0 5px 8px rgba(0,0,0,.03)">
                  {TextMessage}
        </Box>
      </Container>
      <PageManager page={Page} setTextMessage={setTextMessage}/>
      {/* <Router >
        <Routes>
          <Route exact path= "/" element={<Home setTextMessage={setTextMessage}/>}></Route>
          <Route exact path= "/projects" element={<Projects setTextMessage={setTextMessage}/>}></Route>
          <Route exact path="/posts" element={<Posts setTextMessage={setTextMessage}/>}></Route>
        </Routes>
      </Router> */}
    </ChakraProvider>
  );
}

export default App;
