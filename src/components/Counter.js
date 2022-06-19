import React from 'react';
import "./Counter.css";
import $ from "jquery";


function Counter() {

    // ----------------------------------
    // Counter
    // ----------------------------------
    var a = 0;
    $(window).scroll(function () {

        var oTop = $('.counter').offset().top - window.innerHeight;
        if (a === 0 && $(window).scrollTop() > oTop) {
            $('.count').each(function () {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                        countNum: countTo
                    },

                    {

                        duration: 2000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $this.text(this.countNum);
                        }

                    });
            });
            a = 1;
        }
    });




    return (
        <section className="counter">
            <p className="counter__para">
                Over 422K+ Happy Users being with us<br/>And They Are Love Our Platform!
            </p>
            <div className="counter__items">
                <div className="counter__item">
                    <h2><span className="count" id="campaign" data-count="505">0</span>K</h2>
                    <p>Campaigns Created</p>
                </div>
                <div className="counter__item">
                    <h2><span className="count" id="action" data-count="116.1">0</span>M</h2>
                    <p>Actions Performed</p>
                </div>
                <div className="counter__item">
                    <h2>$<span className="count"  data-count="232230">0</span></h2>
                    <p>Earned By Our Users</p>
                </div>
            </div>
        </section>
    )
}

export default Counter;