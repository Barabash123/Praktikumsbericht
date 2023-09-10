"use client";
import styles from "./Header.module.scss";
import Logo from "./Logo";

export default function Header() {
    return (
        <header className={styles.header}>
            <Logo />

            <ul className={styles.author}>
                <li>Taisiia Barabash</li>
                <li>1430200</li>
                <li>5. semester kommunikationsdesign</li>
                <li>Hochschule niederrhein</li>
            </ul>

            <svg
                className={styles.downloadBtn}
                width="178"
                height="50"
                viewBox="0 0 178 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <rect width="178" height="50" rx="6" fill="#0D0C22" />
                <path
                    d="M16.9 20.6H20.068C22.096 20.6 23.692 21.248 23.692 23.42C23.692 25.592 22.096 26.24 20.068 26.24H18.7V29H16.9V20.6ZM21.856 23.42C21.856 22.424 21.076 22.184 20.152 22.184H18.7V24.656H20.152C21.076 24.656 21.856 24.404 21.856 23.42ZM26.0922 20.6H29.2362C32.2242 20.6 33.6402 22.364 33.6402 24.8C33.6402 27.236 32.2242 29 29.2362 29H26.0922V20.6ZM31.8042 24.8C31.8042 23.072 30.9042 22.184 29.2362 22.184H27.8922V27.416H29.2362C30.9042 27.416 31.8042 26.528 31.8042 24.8ZM36.1984 20.6H42.1264V22.22H37.9984V24.176H41.7784V25.796H37.9984V29H36.1984V20.6Z"
                    fill="white"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M156.414 19.414L153.586 16.586C153.211 16.211 152.702 16 152.172 16H145C143.895 16 143 16.895 143 18V32C143 33.105 143.895 34 145 34H155C156.105 34 157 33.105 157 32V20.828C157 20.298 156.789 19.789 156.414 19.414V19.414Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M149.09 30L147.06 27.97"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M151 28.09L149.09 30"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M149.09 30V24"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M157 21H153C152.448 21 152 20.552 152 20V16"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </header>
    );
}
