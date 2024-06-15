import React, { useState,useEffect } from 'react';
import Component1 from './AssetProtection';
import Component2 from './AssetProtection2';
import Component3 from './AssetProtection3';
import './CircleNavigator.css';


const components = [Component1, Component2, Component3];

function CircleNavigator() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % components.length);
    }, 5000); // Change component every 3 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  const CurrentComponent = components[currentIndex];

  return (
    <div className="circle-navigator">
      <div className="component-container">
        <CurrentComponent />
        <div className="circle-container">
          {components.map((_, index) => (
            <div
              key={index}
              className={`circle ${currentIndex === index ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CircleNavigator;
