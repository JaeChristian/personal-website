import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider, extendTheme, Box, useColorModeValue, Container, Text, Link } from '@chakra-ui/react';
import './libs/styles.css';
import Home from './pages/home.js'
import theme from "./libs/theme.js";
import Navbar from "./components/navbar.js";
import Projects from './pages/projects.js';
import Posts from "./pages/posts.js";
import Footer from "./components/footer";
import Section from './components/sectionAnimation';
import PageManager from "./components/page.js";
import React from 'react';
import {useState} from "react";
import { AnimatePresence, motion } from 'framer-motion';
import ModelSwitcher from "./components/modelSwitcher";

function App() {
  const [TextMessage, setTextMessage] = useState("Hey there, I'm a Software Development student based in Canada!");
  const [Page, setPage] = useState("home");
  return (
    <ChakraProvider theme={theme}>
      {/* Navbar, 3d model, and message box */}
      <Navbar setPage={setPage}/>
      <ModelSwitcher/>
      <Container mt={{base: 0, md: 10}} p={{base: 6, md: 0}} pb={{base: 0}} pt={{base:0}} maxWidth={{md: "container.sm"}} position="relative">
        <Box borderRadius="lg" bg="whiteAlpha.200" p={3} mb={6} align="center" boxShadow="0 5px 4px rgba(0,0,0,.02), 0 5px 8px rgba(0,0,0,.03)">
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
      {/* Page content */}
      <PageManager Page={Page} setPage={setPage} setTextMessage={setTextMessage}/>
      {/* footer */}
      <Footer/>
    </ChakraProvider>
  );
}

export default App;
