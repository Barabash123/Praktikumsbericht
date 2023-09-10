import styles from "./Configurator.module.scss";
import Image from "next/image";

const Configurator = () => {
    return (
        <section className={styles.configurator}>
            <h2>Konfigurator</h2>

            <div className={styles.grid}>
                <div className={styles.gridText}>
                    <p>
                        Der Konfigurator ist ein Tool von antwerpes, der es den Kunden der Agentur
                        ermöglicht, schnell und bequem eine Kampagnenanfrage zu senden und dabei
                        deren Details und Budget anzugeben.{" "}
                    </p>
                    <p>
                        Ich sollte das Design der Website unter Berücksichtigung der
                        Benutzerfreundlichkeit und der technischen Anforderungen aktualisieren.
                    </p>
                </div>
                <div className={styles.gridImage}>
                    <Image
                        objectFit="contain"
                        src="/images/configurator3.jpg"
                        fill
                        alt="configurator image"
                    />
                </div>
                <div className={styles.gridBottom}>
                    <Image
                        objectFit="contain"
                        src="/images/configurator2.jpg"
                        fill
                        alt="configurator image"
                    />
                    <Image
                        objectFit="contain"
                        src="/images/configurator1.jpg"
                        fill
                        alt="configurator image"
                    />
                </div>
            </div>
        </section>
    );
};

export default Configurator;
