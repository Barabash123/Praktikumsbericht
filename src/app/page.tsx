"use client";
import Header from "@/components/Header";
import styles from "./page.module.scss";
import Hero from "@/components/Hero";

import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/dist/ScrollSmoother";
import { useEffect } from "react";
import About from "@/components/About";
import { Portfolio } from "@/components/Portfolio";
import Onboarding from "@/components/Onboarding";
import Team from "@/components/Team";
import SocialMedia from "@/components/SocialMedia";
import Configurator from "@/components/Configurator";
import Presentation from "@/components/Presentation";
import Graphic from "@/components/Graphic";
import Conclusion from "@/components/Conclusion";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollSmoother);

export default function Home() {
    useEffect(() => {
        const scroller = ScrollSmoother.create({
            speed: 1.1,
            effects: false,
            normalizeScroll: true,
            ease: "power4.InOut",
        });
    }, []);

    return (
        <>
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <div id="container" className={styles.container}>
                        <Header />
                        <Hero />
                        <About />
                    </div>

                    <Portfolio />
                    <Onboarding />
                    <Team />
                    <SocialMedia />
                    <Configurator />
                    <Presentation />
                    <Graphic />
                    <Conclusion />
                    <Footer />
                </div>
            </div>
        </>
    );
}
