import '../css/OptForm.css';
import React from 'react'

function OptForm({header}) {
    {const content = !!header ? 
        (
            <div className="header__optForm">
                <p>Ready to watch? Enter your email address to create or restart your membership</p>
                <div>
                    <input className="header__input" type="text" placeholder="Email address" />
                    <button className="header__button">
                        <p>Get Started</p>
                        <img src="/images/icons/chevron-right.png" alt="Try Now" />
                    </button>
                </div>
            </div>
        )
        :
        (
            <div className="optForm">
                <p>Ready to watch? Enter your email address to create or restart your membership</p>
                <input className="optForm__input" type="text" placeholder="Email address" />
                <button className="optForm__button">
                    <p>Get Started</p>
                    <img src="/images/icons/chevron-right.png" alt="Try Now" />
                </button>
            </div>
        )

    return content;
    }

};

export default OptForm;
