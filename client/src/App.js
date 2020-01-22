import React from 'react';
import { Container } from '@material-ui/core';
import NavBar from './components/navbar/navbar.component';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './App.css';
import SubListPage from './components/sublist/sublistpage.component';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const App = () => (
  <ThemeProvider theme={darkTheme}>
    <Container maxWidth="lg">
      <NavBar />
      <SubListPage />
    </Container>
  </ThemeProvider>
);

export default App;
