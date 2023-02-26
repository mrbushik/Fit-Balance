import React from "react";

const AboutPage: React.FC = () => {
    return (
        <>
            <div className="container ">
                <div className='about__page-container'>
                    <h1 className='about__page-title'>ABOUT US</h1>
                    <p className="about__description">
                        FitNBalance is a company specializing in the space of orthopedic
                        products and personal well-being. In our everyday lives, injuries and
                        incorrect posture limit us from performing physical activities at the
                        optimum level. Our company is committed to providing support to your
                        body and healing your pain, making previously impossible activities
                        possible. We aim to provide the best possible orthopedic equipment to
                        you as well as to raise posture awareness and promote a ‘Fit &
                        Balanced’ lifestyle among people all around the globe.
                    </p>
                    <p className="about__description">
                        Day to day we are constantly working on helping people live healthier
                        and become more confident by providing our high-quality orthopedic and
                        posture correction products offering a convenient online shopping
                        solution and a 30-day money-back guarantee. Our honest and long-term
                        commitment to our highly valued customers makes our products even more
                        accessible from anywhere in the world at any time.
                    </p>
                    <p className="about__description">
                        Browse our FAQ section to learn more about our products and their
                        specific features.
                    </p>
                </div>

            </div>
        </>
    );
};

export default AboutPage;
