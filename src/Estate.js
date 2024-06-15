    import React from 'react';
    import './Estate.css';
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    import { FaGavel, FaHandHoldingHeart, FaShieldAlt, FaHeart, FaFileSignature, FaBalanceScale } from 'react-icons/fa';

    const Estate = () => {
    const boxContents = [
        { icon: <FaGavel />, text: 'Revocable Living Trusts, including A-B-C provisions' },
        { icon: <FaHandHoldingHeart />, text: 'Charitable Remainder and Charitable Lead Trust' },
        { icon: <FaShieldAlt />, text: 'Irrevocable Trusts, including Irrevocable Life Insurance Trusts' },
        { icon: <FaHeart />, text: 'Anatomical Gifts, Directives to Physician (also known as “Living Wills”)' },
        { icon: <FaFileSignature />, text: 'Powers of Attorney, Powers of Appointment and Pre-Nuptial Agreements' },
        { icon: <FaBalanceScale />, text: 'Probate' },
    ];
        
    return (
        <div className="info-container">
        <div className="left-section">
            <h1 className="header">Secure Your Financial Future</h1>
            <h2 className="title">Estate Planning</h2>
            <p className="paragraph">
            The estate planning practice of Attorney Bustillos includes the preparation of trusts and wills. Attorney Bustillos also fights in court to defend or set aside trusts and wills. Attorney Bustillos has over 40 years of experience in administering trusts, wills and protecting your wishes before and after your death.
            </p>
            <p className="paragraph">Attorney Bustillos was retained by a client to prepare an estate plan for a $2.7 million dollar estate. The client died 4 months later.

    None of the estate went through probate. However, if her estate had gone through probate, the probate fees would have been $40,000. Instead, the law firm was paid only $4,500 in fees to administer the trust after her death, so the estate saved $35,000 in probate fees.</p>
    <p className="paragraph">
    More importantly, without estate planning, the federal estate tax on $2.7 million would have been $902,000. Our client did not have to pay a single dollar in estate taxes.

    Instead of just splitting that $2.7 million among 40 friends and family members, through the estate planning performed by Attorney Bustillos, our client will be distributing $15 million dollars among those 40 friends and family members.
    </p>
        </div>
        <div className="right-section">
            {boxContents.map((box, index) => (  
            <div key={index} className="info-box">
                <div className="icon">{box.icon}</div>
                <div className="text">{box.text}</div>
            </div>
            ))}
        </div>
        </div>
    );
    };

    export default Estate;
