import styles from "./SocialMedia.module.scss";
import { gsap } from "gsap";
import Flip from "gsap/dist/Flip";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import Image from "next/image";
gsap.registerPlugin(Flip, ScrollToPlugin);

const SocialMedia = () => {
    return (
        <section
            onClick={() => {
                const group = document.querySelector("#group") as HTMLDivElement;

                // Get the initial state
                const state = Flip.getState("#group, #box");

                console.log(state);

                // toggle the flex direction
                group.classList.toggle(styles.reorder);

                Flip.from(state, {
                    absolute: true, // uses position: absolute during the flip to work around flexbox challenges
                    duration: 0.3,
                    stagger: 0.1,
                    ease: "power1.inOut",

                    // you can use any other tweening properties here too, like onComplete, onUpdate, delay, etc.
                });
                gsap.to(window, {
                    scrollTo: {
                        y: group,
                    },
                    ease: "none",
                    duration: 0,
                });
            }}
            className={styles.social}>
            <h2>Social Media</h2>
            <p>
                Eine meiner ersten Aufgaben bestand darin, die neuen Gestaltungselemente,
                insbesondere der Bilder für Instagram, für <b>health share</b>, und die Social Media
                Kommunikationsabteilung von antwerpes, zu modernisieren/neu zu entwickeln. Die dabei
                entstandenen Bilder werden vom Social Media Team genutzt und weiterentwickelt.
                Darüber hinaus war ich an der Erstellung von Bildern für die LinkedIn-Seite
                <b>healthy.ID</b>, Targeting-Instrument von antwerpes, beteiligt.
            </p>

            <div id="group" className={styles.grid}>
                <div id="box" className={styles.gridItem}>
                    <Image fill src="/images/socialMedia1.jpg" alt="social media image" />
                </div>
                <div id="box" className={styles.gridItem}>
                    <Image fill src="/images/socialMedia2.jpg" alt="social media image" />
                </div>
                <div id="box" className={styles.gridItem}>
                    <Image fill src="/images/socialMedia3.jpg" alt="social media image" />
                </div>
            </div>
        </section>
    );
};

export default SocialMedia;
