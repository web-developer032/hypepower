/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import "./Home.css";

function Home() {
    return (
        <header className="home">
            <div className="home__left">
                <div className="home__heading">
                    Social Media Exchange on the next level using Artificial Intelligence
                </div>
                <p className="home__para">
                    The most powerful Social Media Community is here on Everve, where you will get a quick boost in the online world and to increase your popularity
                </p>

                <a href="#" className="home__extnsn__box">
                    <img src="images/ChromeWebStore_BadgeWBorder_v2_340x96.png" alt="ChromeWebStore"/>
                </a>
            </div>

            <div className="home__right">
                    <div className="dashboard__img">
                        <img src="images/banner/mac_v5.png" alt="dashboard image"/>
                    </div>
            </div>

            {/* <div className="home__bot--img">
                <img src="images/wave.png" alt=""/>
            </div> */}

            <div className="home__bot--svg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#eee" fillOpacity="1" d="M0,160L80,186.7C160,213,320,267,480,282.7C640,299,800,277,960,256C1120,235,1280,213,1360,202.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                </svg>
            </div>
        </header>
    );
}

export default Home
