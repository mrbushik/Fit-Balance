import React from 'react';
import { Link } from "react-router-dom";
const MainBanner = () => {
    return (
        <>
            <div className="banner__content">
                <img src='https://res.cloudinary.com/drfjcq9hg/image/upload/v1677060347/fit_balance/background_main_oz4ss1.jpg' className="background__main" alt="baner" />
                <div className="banner__container">
                    <h2>Image banner</h2>
                    <p>
                        Give customers details about the banner image(s) or content on the
                        template.
                    </p>
                    <div className="banner__btn-wrapper">
                        <Link to="/products" className="banner__link">
                            Shop all
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainBanner;