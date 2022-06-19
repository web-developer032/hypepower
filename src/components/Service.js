import React, { useState } from 'react';
import "./Service.css";

import Services from './Services';

function Service() {

    const [serviceId, setServiceId] = useState("instagram");

    const handleServiceId = (e) => {
        e.preventDefault();
        setServiceId(e.target.attributes[0].value.slice(1));
    }

    const handleActiveList = (e) => {
        e.stopPropagation();
        document.querySelector(".socialMedia__list").childNodes.forEach((ele) => {
            if (ele.classList.contains("socialMedia__list--active") ) {
                ele.classList.remove("socialMedia__list--active");
            }
        })
    
        e.target.parentNode.classList.add("socialMedia__list--active");
    }

    return (
        <section className="service">
            <h2 className="service__heading">Search our all services and prices by Categories</h2>
            <p className="service__para">
                We would like to take the opportunity to introduce to you our top services which can help you easily grow on social media:
            </p>

            <div className="service__socialMedia">
                <div className="socialMedia__list--box">
                    <h4>
                        <i className="fa fa-th"></i> Social Media Services
                    </h4>
                    <ul className="socialMedia__list" onClick={handleActiveList}>
                        <li className="socialMedia__list--active">
                            <a href="#instagram" onClick={handleServiceId}>
                                <i className="fab fa-instagram" style={{color: "#C27ACA"}}></i>
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a href="#telegram" onClick={handleServiceId}>
                                <i className="fab fa-telegram" style={{color: "#2CA5E0"}}></i>
                                Telegram
                            </a>
                        </li>
                        <li>
                            <a href="#tiktok" onClick={handleServiceId}>
                                <i className="fab fa-tiktok" style={{color: "#999999"}}></i>
                                TikTok
                            </a>
                        </li>
                        <li>
                            <a href="#twitter" onClick={handleServiceId}>
                                <i className="fab fa-twitter" style={{color: "#45C5ED"}}></i>
                                Twitter
                            </a>
                        </li>
                        <li>
                            <a href="#vkontakte" onClick={handleServiceId}>
                                <i className="fab fa-vk" style={{color: "#54769B"}}></i>
                                Vkontakte
                            </a>
                        </li>
                        <li>
                            <a href="#websites" onClick={handleServiceId}>
                                <i className="fab fas fa-sitemap" style={{color: "#28B85D"}}></i>
                                Websites
                            </a>
                        </li>
                        <li>
                            <a href="#youtube" onClick={handleServiceId}>
                                <i className="fab fa-youtube" style={{color: "#F5454D"}}></i>
                                YouTube
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="socialMedia__detail--container">
                    <Services serviceId={serviceId}/>
                </div>
            </div>

        </section>
    );
}

export default Service
