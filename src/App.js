import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import './libs/styles.css';
import Home from './pages/home.js'
import theme from "./libs/theme.js";
import Navbar from "./components/navbar.js";
import Projects from './pages/projects.js';
import Posts from "./pages/posts.js";
import Section from './components/sectionAnimation';
import PageManager from "./components/page.js";
import React from 'react';
import {Box, useColorModeValue, Container} from "@chakra-ui/react";
import {useState} from "react";
import { AnimatePresence, motion } from 'framer-motion';
import Mark2Voxel from "./components/mark2Voxel";

function App() {
  const topMessageColor = useColorModeValue('whiteAlpha.200', 'whiteAlpha.200')
  const [TextMessage, setTextMessage] = useState("Hey there, I'm a Software Development student based in Canada!");
  const [Page, setPage] = useState("home");
  console.log("version 5");
  return (
    <ChakraProvider theme={theme}>
      <Navbar setPage={setPage}/>
      <AnimatePresence>
        <Section>
        <Mark2Voxel/>
        </Section>
      </AnimatePresence>
      <Container mt={{base: 0, md: 10}} p={{base: 6, md: 0}} pb={{base: 0}} pt={{base:0}} maxWidth={{md: "container.sm"}} position="relative">
        <Box borderRadius="lg" bg={topMessageColor} p={3} mb={6} align="center" boxShadow="0 5px 4px rgba(0,0,0,.02), 0 5px 8px rgba(0,0,0,.03)">
          <motion.div
            key={TextMessage}
            initial={{ y: -10, opacity: 0}}
            animate={{ y: 0, opacity: 1}}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25}}
          >
            {TextMessage}
          </motion.div>
        </Box>
      </Container>
      <PageManager page={Page} setTextMessage={setTextMessage}/>
    </ChakraProvider>
  );
}

export default App;
