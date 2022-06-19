import React from 'react';
import "./Work.css";

function Work() {
    return (
        <section className="work">
        <h2 className="work__heading">How Does Everve Work</h2>
        <p className="work__para">
            We would like to take the opportunity to introduce to you our top services which can help you easily grow on social media
        </p>
        <div className="work__steps">
            <div className="step">
                <div className="work__step"><img src="images/step_1.png" alt="step 1"/></div>
                <h3 className="work__step--name">Login</h3>
            </div>
            <div className="step">
                <div className="work__step"><img src="images/step_2.png" alt="step 2"/></div>
                <h3 className="work__step--name">Complete Task</h3>
            </div>
            <div className="step">
                <div className="work__step"><img src="images/step_3.png" alt="step 3"/></div>
                <h3 className="work__step--name">Earn Money</h3>
            </div>
            <div className="step">
                <div className="work__step"><img src="images/step_4.png" alt="step 4"/></div>
                <h3 className="work__step--name">Create Campaigns</h3>
            </div>
            <div className="step">
                <div className="work__step"><img src="images/step_5.png" alt="step 5"/></div>
                <h3 className="work__step--name">Recieve Engagement</h3>
            </div>
        </div>
        <p className="work__about">
            Meet Everve. The simple, intuitive and powerful Social Media Exchange platform where you can help or be helped. Start today for free and become a part of community of like-minded members
        </p>
    </section>
    );
}

export default Work
