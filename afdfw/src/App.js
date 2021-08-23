import './App.css';
import Container from '@material-ui/core/Container'
import React from 'react'
import {Animated} from "react-animated-css";
// import MenuIcon from '@material-ui/icons/Menu';
import IntroPage from './components/Intro/intro'
import Scrollup from './components/Scrollup/ScrollUp'
import Navigation from './components/Navigation/Nav'
import IntroPageTypeJs from './components/IntroPageTypeJs/IntroPageType'
import ReactPlayer from './components/ReactPlayer/ReactPlayer'
// import Carousel from './components/Carousel/Carousel'
// import ContactUs from './components/ContactUs/Contact'
import Events from './components/Events/Events'
import MeetupPics from './components/MeetupPictures/MeetupPics'
// import Footer from './components/Footer/Footer'

function App() {
  return (
    // <Container maxWidth='xl'>
    <div className="App">
     
      
        <Scrollup />
        <Navigation />
        <IntroPage />
        <IntroPageTypeJs/>
        <ReactPlayer className='media-player'/>
        <Events/>
        <MeetupPics/>
        {/* <ContactUs/> */}
        {/* <Footer/> */}

    </div>
    // </Container>
  );
}

export default App;
