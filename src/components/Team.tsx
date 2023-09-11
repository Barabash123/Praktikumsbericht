import { iconDot } from "./Portfolio";
import styles from "./Team.module.scss";
import Image from "next/image";

const teamMember = [
    {
        name: "Aleksandar Gruičić",
        position: "Senior Designer \n Virtual Space & Design",
        src: "/images/teamMember1.jpg",
    },
    {
        name: "Lutz Henrich",
        position: "Head of Team \n Motion & Design",
        src: "/images/teamMember2.jpg",
    },
    {
        name: "Carola \n Sandmann-Basseng",
        position: "Junior Designer",
        src: "/images/teamMember3.jpg",
    },
    {
        name: "Lilli Bentrup",
        position: "Junior Designer",
        src: "/images/teamMember4.jpg",
    },
    {
        name: "Alina Sieburg",
        position: "Junior Designer",
        src: "/images/teamMember5.jpg",
    },
    {
        name: "Jan Schmerbitz",
        position: "Junior Designer",
        src: "/images/teamMember6.jpg",
    },
];

const Team = () => {
    return (
        <section className={styles.team}>
            <h2>
                {iconDot}
                <span>Virtual Space & Design + Motion & Design</span>
                Das Team
            </h2>

            <div className={styles.teamMembers}>
                {teamMember.map((member, idx) => {
                    return <TeamMember {...member} key={idx} />;
                })}
            </div>

            <Responsibility />
        </section>
    );
};

const TeamMember = ({ src, name, position }: { src: string; name: string; position: string }) => {
    return (
        <div className={styles.teamMember}>
            <div className={styles.teamMemberPhoto}>
                <Image objectFit="cover" fill src={src} alt="team member photo" />
            </div>
            <pre className={styles.teamMemberName}>{name}</pre>
            <pre className={styles.teamMemberPos}>{position}</pre>
        </div>
    );
};

const Responsibility = () => {
    return (
        <div className={styles.responsibility}>
            <h2>
                Meine Aufgabenbereiche
                {iconDot}
            </h2>
            <div>
                <p>
                    Meine täglichen Aufgaben bestanden im Wesentlichen darin, meine Kollegen bei
                    ihren Projekten zu unterstützen. In antwerpes ag arbeitet man wirklich im Team,
                    da die Projekte meistens groß sind. Man sollte im Team jederzeit bereit sein,
                    auf den Wunsch des Kunden einzugehen, Korrekturen vorzunehmen und dabei den Stil
                    des Projekts beizubehalten. Die Aufgaben waren immer abwechslungsreich und meine
                    Fähigkeiten in den Programmen konnte ich stets verbessern.
                </p>
                <div className={styles.responsibilityContainer}>
                    <div>
                        <div className={styles.imageWrapper}>
                            <Image
                                src="/images/responsibility1.png"
                                width={60}
                                height={62}
                                alt="geometry"
                            />
                            <div className={styles.dot1}>{iconDot}</div>
                        </div>
                        <p>
                            Entwicklung von Bannern, E-Mails und Werbematerialien für verschiedene
                            Kunden
                        </p>
                    </div>
                    <div>
                        <div className={styles.imageWrapper}>
                            <Image
                                src="/images/responsibility2.png"
                                width={72}
                                height={72}
                                alt="geometry"
                            />
                            <div className={styles.dot2}>{iconDot}</div>
                        </div>
                        <p>
                            Betreuung der sozialen Netzwerke der Agentur sowie die Mitarbeit bei der
                            Gestaltung von Websites
                        </p>
                    </div>
                    <div>
                        <div className={styles.imageWrapper}>
                            <Image
                                className={styles.geometry}
                                src="/images/responsibility3.png"
                                width={81}
                                height={84}
                                alt="geometry"
                            />
                            <div className={styles.dot3}>{iconDot}</div>
                        </div>
                        <p>
                            Vorbereitung von Präsentationen und Infografiken, Bildrecherche und
                            Visualisierung der Information
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;
