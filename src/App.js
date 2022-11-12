import React from 'react';
import './App.css';
import { extendTheme, ChakraProvider } from '@chakra-ui/react'
import Home from './pages/Home';
import NotFound from './pages/NotFound';
// import Blog from './pages/Blog';
// import Signup from './pages/Register/Signup';
// import Login from './pages/Register/Login';

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}
const theme = extendTheme({ colors })
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Home />
      {/* <Signup /> */}
      {/* <Login /> */}
      {/* <Blog /> */}
      {/* <NotFound /> */}
    </ChakraProvider>
  );
}

export default App;
