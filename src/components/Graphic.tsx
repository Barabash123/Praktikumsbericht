import styles from "./Graphic.module.scss";
import Image from "next/image";
import { gsap } from "gsap";
import Flip from "gsap/dist/Flip";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
gsap.registerPlugin(Flip, ScrollToPlugin);

const Graphic = () => {
    return (
        <section
            onClick={() => {
                const group = document.querySelector("#group2") as HTMLDivElement;

                // Get the initial state
                const state = Flip.getState("#group2, #box2");

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
                    duration: 0,
                    ease: "none",
                });
            }}
            className={styles.graphic}>
            <h2>Grafiken und Visualisierung</h2>
            <p>
                Gut gestaltete Informationen werden vom Nutzer deutlich besser wahrgenommen,
                insbesondere wenn es sich um komplexe Fachinformationen handelt. Die Aufgaben zum
                Erstellen von Grafiken und Diagrammen waren interessant und haben mir Spaß gemacht.
            </p>

            <div id="group2" className={styles.grid}>
                <div id="box2" className={styles.gridItem}>
                    <Image
                        objectFit="contain"
                        src="/images/graphic1.jpg"
                        fill
                        alt="graphic image"
                    />
                </div>
                <div id="box2" className={styles.gridItem}>
                    <Image
                        objectFit="contain"
                        src="/images/graphic2.jpg"
                        fill
                        alt="graphic image"
                    />
                </div>
                <div id="box2" className={styles.gridItem}>
                    <Image
                        objectFit="contain"
                        src="/images/graphic3.jpg"
                        fill
                        alt="graphic image"
                    />
                </div>
                <div id="box2" className={styles.gridItem}>
                    <Image
                        objectFit="contain"
                        src="/images/graphic4.jpg"
                        fill
                        alt="graphic image"
                    />
                </div>
            </div>
        </section>
    );
};

export default Graphic;
