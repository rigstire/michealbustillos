import React, { useRef } from 'react';
import TabBar from './TabBar';
import './App.css';
import Home from './Home';
import CircleNavigator from './ShuffleComponents';
import LegalInfo from './LegalInfo'; // Import the new component
import AssetInfo from './AssetInfo';
import Estate from './Estate';
import Medical from './Medical';
import Contact from './Contact';


function App() {
  const scrollContainerRef = useRef();
  const sectionRefs = {
    home: useRef(),
    assetProtection: useRef(),
    estatePlanning: useRef(),
    mediCalQualification: useRef(),
    about: useRef(),
  };

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      <TabBar scrollToSection={scrollToSection} sectionRefs={sectionRefs} />
      <div ref={scrollContainerRef} className="scroll-container">
        <div ref={sectionRefs.home} className="section">
          <Home />
        </div>
        <div ref={sectionRefs.legalInfo} className="section">
          <LegalInfo />
        </div>
        <div ref={sectionRefs.assetProtection} className="section">
          <CircleNavigator />
        </div>
        <div ref={sectionRefs.estatePlanning} className="section">
          <div><Estate/></div>
        </div>
        <div ref={sectionRefs.mediCalQualification} className="section">
          <div><Medical/></div>
        </div>
        <div ref={sectionRefs.about} className="section">
          <div><Contact/></div>
        </div>
      </div>
    </div>
  );
}

export default App;
