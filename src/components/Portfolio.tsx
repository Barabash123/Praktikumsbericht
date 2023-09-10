"use client";
import { useState } from "react";
import styles from "./Portfolio.module.scss";
import Image from "next/image";

export const Portfolio = () => {
    const [config, setConfig] = useState({
        currentSlide: 0,
    });

    return (
        <section className={styles.portfolio}>
            <div>
                <div className={styles.portfolioHead}>
                    <h2>Portfolio</h2>
                    <a href="#">
                        {iconDot}
                        mehr auf behance
                        {iconArrow}
                    </a>
                </div>
                <p>
                    Während meiner vier Semester an der Hochschule Niederrhein hatte ich die
                    Möglichkeit, verschiedene Bereiche auszuprobieren, darunter Editorial Design,
                    Illustration, Informationsdesign und App-Entwicklung. Mein Portfolio umfasst
                    sowohl Hochschulprojekte als auch eigene Arbeiten.
                </p>
                <div className={styles.tabs}>
                    <button
                        onClick={() => {
                            setConfig(state => ({ ...state, currentSlide: 0 }));
                        }}
                        className={[
                            styles.tab,
                            config.currentSlide === 0 ? styles.tabActive : "",
                        ].join(" ")}>
                        <span>Web Design</span>
                        <span>Web Design</span>
                    </button>
                    <button
                        onClick={() => {
                            setConfig(state => ({ ...state, currentSlide: 1 }));
                        }}
                        className={[
                            styles.tab,
                            config.currentSlide === 1 ? styles.tabActive : "",
                        ].join(" ")}>
                        <span>Mobile & Apps</span>
                        <span>Mobile & Apps</span>
                    </button>
                    <button
                        onClick={() => {
                            setConfig(state => ({ ...state, currentSlide: 2 }));
                        }}
                        className={[
                            styles.tab,
                            config.currentSlide === 2 ? styles.tabActive : "",
                        ].join(" ")}>
                        <span>Druck & Illustration</span>
                        <span>Druck & Illustration</span>
                    </button>
                </div>

                <div className={styles.slides}>
                    <div
                        className={[
                            styles.slide,
                            config.currentSlide === 0 ? styles.slideActive : "",
                        ].join(" ")}>
                        <div className={styles.slideContent}>
                            <div>
                                <Image
                                    objectFit="cover"
                                    alt="slide image 1"
                                    fill
                                    src="/images/portfolioSlideImage1.png"
                                />
                            </div>
                            <div>
                                <Image
                                    objectFit="cover"
                                    alt="slide image 2"
                                    fill
                                    src="/images/portfolioSlideImage2.png"
                                />
                            </div>
                            <div>
                                <Image
                                    objectFit="cover"
                                    alt="slide image 3"
                                    fill
                                    src="/images/portfolioSlideImage3.png"
                                />
                            </div>
                        </div>
                    </div>
                    <div
                        className={[
                            styles.slide,
                            config.currentSlide === 1 ? styles.slideActive : "",
                        ].join(" ")}>
                        <div className={styles.slideContent}>
                            <div>
                                <Image
                                    objectFit="cover"
                                    alt="slide image 4"
                                    fill
                                    src="/images/portfolioSlideImage4.png"
                                />
                            </div>
                            <div>
                                <Image
                                    objectFit="cover"
                                    alt="slide image 5"
                                    fill
                                    src="/images/portfolioSlideImage5.png"
                                />
                            </div>
                            <div>
                                <Image
                                    objectFit="cover"
                                    alt="slide image 6"
                                    fill
                                    src="/images/portfolioSlideImage6.png"
                                />
                            </div>
                        </div>
                    </div>
                    <div
                        className={[
                            styles.slide,
                            config.currentSlide === 2 ? styles.slideActive : "",
                        ].join(" ")}>
                        <div className={styles.slideContent}>
                            <div>
                                <Image
                                    objectFit="cover"
                                    alt="slide image 7"
                                    fill
                                    src="/images/portfolioSlideImage7.png"
                                />
                            </div>
                            <div>
                                <Image
                                    objectFit="cover"
                                    alt="slide image 8"
                                    fill
                                    src="/images/portfolioSlideImage8.png"
                                />
                            </div>
                            <div>
                                <Image
                                    objectFit="cover"
                                    alt="slide image 9"
                                    fill
                                    src="/images/portfolioSlideImage9.png"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export const iconDot = (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="5" cy="5" r="5" fill="url(#paint0_linear_40_61369)" />
        <defs>
            <linearGradient
                id="paint0_linear_40_61369"
                x1="2.14286"
                y1="0.918367"
                x2="7.44898"
                y2="8.87755"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF7D00" />
                <stop offset="1" stop-color="#FF4800" />
            </linearGradient>
        </defs>
    </svg>
);

const iconArrow = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M16.95 7.05005L7.04999 16.95"
            stroke="#9A9AA2"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M10 7L16.95 7.049L17 14"
            stroke="#9A9AA2"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </svg>
);
