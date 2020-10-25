import React, { useEffect } from "react";
import "../css/components/OpeningAnimation.css";
import anime from 'animejs/lib/anime.es';

const OpeningAnimation = (props) => {

    const doAnimate = () => {
        return anime.timeline({ loop: false })
            .add({
                targets: '.ml5 .line',
                opacity: [0.5, 1],
                scaleX: [0, 1],
                easing: "easeInOutExpo",
                duration: 1500
            }).add({
                targets: '.ml5 .line',
                duration: 1500,
                easing: "easeOutExpo",
                translateY: (el, i) => (-0.625 + 0.625 * 2 * i) + "em"
            }).add({
                targets: '.ml5 .ampersand',
                opacity: [0, 1],
                scaleY: [0.5, 1],
                easing: "easeOutExpo",
                duration: 600,
                offset: '-=600'
            }).add({
                targets: '.ml5 .letters-left',
                opacity: [0, 1],
                translateX: ["0.5em", 0],
                easing: "easeOutExpo",
                duration: 600,
                offset: '-=300'
            }).add({
                targets: '.ml5 .letters-right',
                opacity: [0, 1],
                translateX: ["-0.5em", 0],
                easing: "easeOutExpo",
                duration: 600,
                offset: '-=600',
            });

    }

    useEffect(() => { doAnimate() }, [])

    return (
        <h1 className="ml5">
            <span className="text-wrapper">
                <span className="line line1"></span>
                <p className="letters letters-left">Hao{" "}</p>
                <p className="letters ampersand"><strong>x</strong></p>
                <p className="letters letters-right">{" "}Hao</p>
                <span className="line line2"></span>
            </span>
        </h1>
    )
}

export default OpeningAnimation;