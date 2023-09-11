import styles from "./Graphic.module.scss";
import Image from "next/image";
import { gsap } from "gsap";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

const Graphic = () => {
    return (
        <section className={styles.graphic}>
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
