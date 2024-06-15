import React from 'react';
import './Medical.css';
import lawImage from './lawimagesmall.webp';
import wallet from './wallet.webp';

const Medical = () => {
  return (
    <div className="main-container">
      <div className="minfo-container">
        <div className="mleft-section">
          <h1 className="mheader">Navigate Medi-Cal with Confidence</h1>
          <h2 className="mtitle">MEDI-CAL QUALIFICATION</h2>
          <p className="mparagraph">
            When Col. Mustard first moved into a skilled nursing facility he was paying $10,000 per month. That eats up a lot of inheritable money.
            Through the use of Asset Protection Planning, Col. Mustard can qualify for Medi-Cal, reduce the monthly drain on his estate to only $2,900, and PASS AN INHERITANCE TO HIS CHILDREN.
          </p>
        </div>
        <div className="mright-section">
          <img src={lawImage} alt="Estate Planning" className="mright-image" />
        </div>
      </div>

      <div className="minfo-container reverse">
        <div className="mright-section">
          <img src={wallet} alt="Another Image" className="mright-image" />
        </div>
        <div className="mleft-section">
          <h1 className="mheader">Expert Assistance for Medi-Cal Eligibility</h1>
          <h2 className="mtitle">MEDI-CAL SUCCESS STORY</h2>
          <p className="mparagraph">
          I was retained by clients who held rental properties in San Diego and Nevada, had their home in California, and had $200,000 in personal property. Because of a medical matter, the husband had to qualify for Medi-Cal. Normally, with all their assets, they would not qualify. By strictly following California and Federal Medi-Cal regulations, I was able to qualify them for Medi-Cal and retain their assets for their children to inherit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Medical;
