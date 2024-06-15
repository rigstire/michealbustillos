import React from 'react';
import './TabBar.css'; // Ensure you have the correct path to your CSS file
import icon from './circleimage.png'; // Adjust the path to your image
import { FaPhone } from 'react-icons/fa';

const TabBar = ({ scrollToSection, sectionRefs }) => {
  return (
    <div className="tab-bar">
      <div className="tab-image">
        <img src={icon} alt="Icon" />
      </div>
      <button onClick={() => scrollToSection(sectionRefs.home)} className="tab-link">
        Home
      </button>
      <button onClick={() => scrollToSection(sectionRefs.assetProtection)} className="tab-link">
        Asset Protection
      </button>
      <button onClick={() => scrollToSection(sectionRefs.estatePlanning)} className="tab-link">
        Estate Planning
      </button>
      <button onClick={() => scrollToSection(sectionRefs.mediCalQualification)} className="tab-link">
        Medi-Cal Qualification
      </button>
      <button onClick={() => scrollToSection(sectionRefs.about)} className="tab-link">
        Contact
      </button>
      <FaPhone className='PhoneIcon' />
      <div className="PhoneNumber">760-705-6062</div>
    </div>
  );
};

export default TabBar;
