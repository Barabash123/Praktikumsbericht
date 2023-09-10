"use client";
import Header from "@/components/Header";
import styles from "./page.module.scss";
import Hero from "@/components/Hero";
import dynamic from "next/dynamic";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/dist/ScrollSmoother";
import { useEffect } from "react";

const About = dynamic(() => import("@/components/About"), {
    ssr: false,
    loading: () => <div>Loading...</div>,
});
const Portfolio = dynamic(() => import("@/components/Portfolio"), {
    ssr: false,
    loading: () => <div>Loading...</div>,
});
const Onboarding = dynamic(() => import("@/components/Onboarding"), {
    ssr: false,
    loading: () => <div>Loading...</div>,
});
const Team = dynamic(() => import("@/components/Team"), {
    ssr: false,
    loading: () => <div>Loading...</div>,
});
const SocialMedia = dynamic(() => import("@/components/SocialMedia"), {
    ssr: false,
    loading: () => <div>Loading...</div>,
});
const Configurator = dynamic(() => import("@/components/Configurator"), {
    ssr: false,
    loading: () => <div>Loading...</div>,
});
const Presentation = dynamic(() => import("@/components/Presentation"), {
    ssr: false,
    loading: () => <div>Loading...</div>,
});
const Graphic = dynamic(() => import("@/components/Graphic"), {
    ssr: false,
    loading: () => <div>Loading...</div>,
});
const Conclusion = dynamic(() => import("@/components/Conclusion"), {
    ssr: false,
    loading: () => <div>Loading...</div>,
});
const Footer = dynamic(() => import("@/components/Footer"), {
    ssr: false,
    loading: () => <div>Loading...</div>,
});

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
