import './App.css';
import Container from '@material-ui/core/Container'
import React from 'react'
import {Animated} from "react-animated-css";
// import MenuIcon from '@material-ui/icons/Menu';
import IntroPage from './components/Intro/intro'
import Scrollup from './components/Scrollup/ScrollUp'
import Navigation from './components/Navigation/Nav'
import IntroPageTypeJs from './components/IntroPageTypeJs/IntroPageType'

function App() {
  return (
    <Container maxWidth='xl'>
    <div className="App">
     
      
        <Scrollup />
        <Navigation />
        <IntroPage />
        <IntroPageTypeJs/>

    </div>
    </Container>
  );
}

export default App;
