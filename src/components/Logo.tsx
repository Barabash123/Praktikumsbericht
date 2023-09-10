import { IconLogo } from "./IconLogo";
import styles from "./Logo.module.scss";

export default function Logo() {
    return (
        <div className={styles.logo}>
            Praktikumsbericht
            <IconLogo id="iconDot" />
        </div>
    );
}
