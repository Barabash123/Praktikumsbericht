import Image from "next/image";
import styles from "./Conclusion.module.scss";
import { iconDot } from "./Portfolio";

const Conclusion = () => {
    return (
        <section className={styles.conclusion}>
            <h2>Fazit</h2>
            <div className={styles.conclusionContent}>
                <div>
                    <p>
                        Meine Werkstudentenarbeit habe ich meistens vom Homeoffice aus erledigt. Ich
                        konnte so jedoch meine Selbstorganisation bei der Arbeit verbessern und habe
                        mich darin geübt, meine Zeit für die Aufgaben realistischer einzuschätzen.
                    </p>
                    <p>
                        Antwerpes ist vor allem ein großartiger Arbeitgeber für diejenigen, die Spaß
                        an einer abwechslungsreichen Arbeit haben und Lust haben, sich in
                        verschiedenen Bereichen auszuprobieren. Zuerst war ich im Team Virtual Space
                        and Design, dann arbeitete ich weiter in der Abteilung Motion and Design, in
                        der es weitere Aufgaben für soziale Netzwerke gab. Das Unternehmen
                        ermöglicht den Mitarbeitern, innerhalb der Abteilungen zu wechseln und sich
                        nicht nur auf einen Aufgabenbereich zu beschränken, was für mich auch
                        wichtig war.
                    </p>
                    <p>
                        Ich habe nicht nur ein Verständnis dafür entwickelt, wie das Unternehmen
                        organisiert ist und wie die Abläufe der Arbeit funktionieren, sondern auch
                        viele weitere Fragen zum Berufsleben beantwortet bekommen (z. B. zum Thema
                        Versicherungen und zum Thema Steuern).
                    </p>
                    <p>
                        Darüber hinaus half mir das Sammeln praktischer Erfahrungen auch dabei, mich
                        im Studium sicherer zu fühlen. Endlich kann ich das erworbene Wissen bei der
                        Arbeit mit echten Kunden anwenden, was eine große Motivation dafür ist, mich
                        weiterzuentwickeln.
                    </p>
                </div>
                <div>
                    <p>
                        Natürlich muss ich beruflich noch viel lernen und einige meiner persönlichen
                        Fähigkeiten verbessern. Die Kommunikation mit Kollegen fällt mir immer noch
                        schwer, da es noch nicht so funktioniert, wie ich es gerne hätte. Der
                        Homeoffice macht diese Kommunikation auch nicht besser. Hier kann ich mich
                        noch verbessern: meine Einschätzung des Zeitaufwandes für Aufgaben und das
                        Gefühl dafür zu bekommen, nicht zu viele Aufgaben zu übernehmen. Die Arbeit
                        bei antwerpes ag gab mir jedoch die Gelegenheit zu verstehen, wie ich
                        vorgehen muss und woran ich arbeiten sollte.
                    </p>
                    <p>
                        Für mich war es auch interessant, die Arbeitsorganisation zu beobachten und
                        meine bisherigen Erfahrungen mit der Arbeit bei antwerpes zu vergleichen.
                        Ich habe in dem Unternehmen eine gute Organisation wahrgenommen, in der
                        alles reibungslos läuft und Projekte, an denen viele Mitarbeiter/innen
                        arbeiten, pünktlich und ohne Druck oder Stress abgeschlossen werden und in
                        der niemand am Wochenende arbeiten muss. Die Projektmanager/innen geben hier
                        ihr Bestes, um Aufgaben ausführlich zu erklären und dabei ein freundliches
                        und hilfsbereites Arbeitsklima zu erhalten. antwerpes ist nicht nur ein
                        Arbeitgeber, sondern eine echte Gemeinde von Menschen, die sich für ihre
                        Arbeit begeistern. Als Praktikumsstelle kann ich antwerpes ag ohne Zweifel
                        weiterempfehlen.
                    </p>
                </div>
            </div>

            <div className={styles.conclusionImage}>
                {iconDot}
                <Image
                    src="/images/conclusion.jpg"
                    alt="conclusion image"
                    fill
                    objectFit="contain"
                />
            </div>
        </section>
    );
};

export default Conclusion;
