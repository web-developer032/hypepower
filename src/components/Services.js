/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';

function Services(props) {
    const data = [
        {
            name : "Instagram",
            images : [
                "images/free-instagram-followers.png",
                "images/free-instagram-likes.png",
                "images/free-instagram-comments.png"
            ],
            aboutImage : [
                "Instagram Followers",
                "Instagram Likes",
                "Instagram Comments"
            ]
        },
        {
            name : "Telegram",
            images : [
                "images/free-telegram-channels.png"
            ],
            aboutImage : [
                "Telegram Channels"
            ]
        },
        {
            name : "TikTok",
            images : [
                "images/free-instagram-likes.png"
            ],
            aboutImage : [
                "TikTok Likes"
            ]
        },
        {
            name : "Twitter",
            images : [
                "images/free-twitter-followers.png"
            ],
            aboutImage : [
                "Twitter Followers"
            ]
        },
        {
            name : "Vkontakte",
            images : [
                "images/free-vkontakte-groups.png",
                "images/free-vkontakte-pages.png",
                "images/free-vkontakte-likes.png",
                "images/free-vkontakte-reposts.png"
            ],
            aboutImage : [
                "Vkontakte Groups",
                "Vkontakte Pages",
                "Vkontakte Likes",
                "Vkontakte Reposts"
            ]
        },
        {
            name : "Websites",
            images : [
                "images/free-traffic-exchange.png"
            ],
            aboutImage : [
                "Traffic Exchange"
            ]
        },
        {
            name : "YouTube",
            images : [
                "images/free-youtube-views.png",
                "images/free-youtube-likes.png",
                "images/free-youtube-dislikes.png"
            ],
            aboutImage : [
                "YouTube Views",
                "YouTube Likes",
                "YouTube Dislikes"
            ]
        }
    ];

    const [index, setIndex] = useState(0);



    useEffect(() => {
        data.filter((ele,ind) => {
            if (ele.name.toLowerCase() === props.serviceId) {
                setIndex(ind);
            }            
        })
        // console.log(index);
    });



    return (
        <>
            <div id={data[index].name.toLowerCase()} className="socialMedia__detail">
                <h2>{data[index].name}</h2>
                <div className="socialMedia__detail--box">
                    {data[index].images.map((val,ind) => {
                        return (
                            <a href="#" className="box" key={ind}>
                                <div className="box__img">
                                    <img src={val} alt="telegram follower"/>
                                    <span>
                                        <i className="fa fa-eye"></i>
                                    </span>
                                </div>
                                <div className="box__detail">
                                    <h5>{data[index].aboutImage[ind]}</h5>
                                    <p>From $0.002 to $0.1 per<br />one action</p>
                                </div>
                            </a>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default Services