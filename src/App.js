import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import './libs/styles.css';
import Home from './pages/home.js'
import theme from "./libs/theme.js";
import Navbar from "./components/navbar.js";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar/>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
