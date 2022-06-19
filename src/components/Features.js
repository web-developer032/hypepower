import React from 'react';
import "./Features.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

function Features() {
    AOS.init();
    return (
        <>
        <section className="features">
            <div className="features__left">
                <img src="./images/everve-about.png" alt=""/>
            </div>

            <div className="features__right">
                <h2 className="features--heading">More than an exchange<br/>that perfect fit for your needs</h2>
                <p className="features__para">
                    Our platform will help you to grow your online business, personal blogs and social media networks by increasing website traffic, search engine rankings, and getting free social media signals from genuinely users. <br/> <br/>

                    Everve allow you to exchange online actions for money. These actions range from following other person on Instagram, Twitter, VK, etc or viewing, liking, subscribing, commenting YouTube videos or any other type of action. This content most often belongs to other members from Everve platform who are also trying to boost their social proof.<br/> <br/>

                    Once you have acquired enough money, you can then exchange them for social engagement on your own links. We are even allow you to withdraw these money for CASH but also option to top up your balance if you don't want to spend time performing actions.<br/> <br/>

                    Everve exist just to offer the best way to boost social engagement, website, SEO and many more...
                </p>
            </div>
        </section>

        <section className="features__ext">
            <div className="features__ext--left">
                <h2>Chrome Extension available to make money easy, fast and automatic</h2>
                <p className="features__ext--para">
                    Using our unique extension, it will help you make money automatically, while drinking your coffee or surfing on the Internet.
                </p>
                <ul className="features__ext--list">
                    <li>
                        <i className="fas fa-check"></i>
                        <p>
                            Everve free Chrome extension provides you unique and authentic optimization tasking that can dramatically improve your social media performance
                        </p>
                    </li>
                    <li>
                        <i className="fas fa-check"></i>
                        <p>
                            It comes with a range of awesome features including: delay between tasks, sleeping mode, artificial intelligence, start/pause option for each module
                        </p>
                    </li>
                    <li>
                        <i className="fas fa-check"></i>
                        <p>
                            We work to make this extension as efficient as possible and so we release weekly updates to improve it
                        </p>
                    </li>
                </ul>
            </div>

            <div className="features__ext--right">
                <div className="screen__img" data-aos="zoom-out">
                    <img src="images/everve-ext-screenshot7b30.png" alt=""/>
                </div>
                <div className="ext__img" data-aos="zoom-out" data-aos-delay="200">
                    <img src="images/ChromeWebStore_BadgeWBorder_v2_340x96.png" alt=""/>
                </div>
            </div>

        </section>
        </>
    );
}

export default Features