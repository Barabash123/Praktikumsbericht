import styles from "./Onboarding.module.scss";
import { iconDot } from "./Portfolio";

const Onboarding = () => {
    return (
        <section className={styles.onboarding}>
            <div>
                <h2>
                    {iconDot} <span>Onboarding</span>
                </h2>
                <p>
                    Die erste Woche bei antwerpes ist äußerst wichtig. Neben den üblichen
                    Kennenlernen gibt es zahlreiche Teamevents wie eine Büroführung oder Kaffee- und
                    Mittagessen mit dem Team. Neue Mitarbeiter erhalten die gesamte Ausrüstung und
                    Willkommensgeschenke. Zudem muss man die nötige Schulung in Form von
                    Online-Vorlesungen absolvieren, was mir am Anfang sehr geholfen hat.
                </p>
                <p>
                    Von Anfang an war deutlich, dass die Atmosphäre im Unternehmen sehr freundlich
                    und weniger stressig ist. Täglich finden Online-Meetings jedes Teams statt, bei
                    denen alle über aktuelle Projekte sprechen. Das ist praktisch, da viele Kollegen
                    remote arbeiten.
                </p>

                <div className={styles.images}>
                    <div className={styles.image}>
                        <img src="/images/onboarding-1.jpg" alt="room with people who working" />
                    </div>
                    <div className={styles.image2}>
                        <img src="/images/onboarding-2.jpg" alt="women with laptop" />
                        {iconDot}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Onboarding;
