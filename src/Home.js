// Home.js
import './Home.css';
import React, { useState, useEffect } from 'react';
import portfolioImage from './portfolio.png'; // Import the image

const Component1 = () => {
  return (
    <div className="black-background-container">
      <div className="left-side">
        <div className="text-block">
          <h1>Luis Michael Bustillos</h1>
          <h2>Attorney and Counselor at Law</h2>
          <p>Attorney Michael Bustillos has spent 40 years working in Estate Planning, Asset Protection, and Medi-Cal qualification. He strives to provide an attorney-client relationship based on open communication, attention to individual needs, and accessibility. Attorney Bustillos treats each matter with thoroughness and provides quality representation in your legal matters.</p>
        </div>
      </div>
      <div className="right-side">
      </div>
    </div>
  );
};

const Component2 = () => {
  return (
    <div className="black-background-container">
      <div className="left-side">
        <div className="text-block">
          <h1>Luis Michael Bustillos</h1>
          <h2>Attorney and Counselor at Law</h2>
          <p>Mr. Bustillos has lived and worked in San Diego County since 1960. He received his Bachelor of Arts degree from the University of California at Santa Barbara. He received his law degree from the College of Law at Willamette University in Salem, Oregon, in 1981. Willamette University’s College of Law is recognized as the premier law school of the Pacific Northwest. Mr. Bustillos has served on the boards of directors for San Diego Criminal Defense Bar, Homeowners Associations, and other non-profit corporations.</p>
        </div>
      </div>
      <div className="right-side">
      </div>
    </div>
  );
};

const leftComponents = [Component1, Component2];

const Home = () => {
  const [currentLeftIndex, setCurrentLeftIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLeftIndex((prevIndex) => (prevIndex + 1) % leftComponents.length);
    }, 5000); // Change component every 5 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  const CurrentLeftComponent = leftComponents[currentLeftIndex];

  return (
    <div className="black-background-container">
      <div className="left-side">
        <CurrentLeftComponent />
        <div className="button-container">
          <button
            className={`nav-button ${currentLeftIndex === 0 ? 'active' : ''}`}
            onClick={() => setCurrentLeftIndex(0)}
          >
          </button>
          <button
            className={`nav-button ${currentLeftIndex === 1 ? 'active' : ''}`}
            onClick={() => setCurrentLeftIndex(1)}
          >
          </button>
        </div>
      </div>
      <div className="right-side">
        <img src={portfolioImage} alt="Portfolio" className="image" />
      </div>
    </div>
  );
};

export default Home;
