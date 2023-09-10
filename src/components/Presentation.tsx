import styles from "./Presentation.module.scss";
import Image from "next/image";

const Presentation = () => {
    return (
        <section className={styles.presentation}>
            <h2>Präsentationen</h2>
            <p>
                Präsentationen sind ein wichtiger Bestandteil der internen, externen und visuellen
                Kommunikation eines jeden Unternehmens. Ich beteiligte mich an der Verbesserung und
                Entwicklung der internen Präsentationen von antwerpes ag und Omnichannel sowie an
                einer kleinen Präsentation für Sobi, einem biopharmazeutischen Unternehmen.
            </p>

            <div className={styles.grid}>
                <div className={styles.gridImage}>
                    <Image
                        objectFit="cover"
                        src="/images/presentation1.jpg"
                        fill
                        alt="presentation image"
                    />
                </div>
                <div className={styles.gridSpace}>
                    <Image
                        objectFit="cover"
                        src="/images/presentation3.jpg"
                        fill
                        alt="presentation image"
                    />
                </div>
                <div className={styles.gridBottom}>
                    <Image
                        objectFit="cover"
                        src="/images/presentation2.jpg"
                        fill
                        alt="presentation image"
                    />
                </div>
            </div>
        </section>
    );
};

export default Presentation;
