import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div>
                <a href="mailto:taisiia.barabash@stud.hn.de">taisiia.barabash@stud.hn.de</a>
                <a href="tel:+49 0179 455 88 79">+49 0179 455 88 79</a>
            </div>
        </footer>
    );
};

export default Footer;
