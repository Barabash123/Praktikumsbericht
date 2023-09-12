import { useEffect } from "react";
import styles from "./About.module.scss";
import { IconLogo } from "./IconLogo";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/dist/TextPlugin";

gsap.registerPlugin(TextPlugin);

export default function About() {
    useEffect(() => {
        const allTextBlocks = document.querySelector("#about") as HTMLElement;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: allTextBlocks,
                start: "top 80%",
                end: "bottom 20%",
                scrub: 1,
            },
        });
    }, []);

    return (
        <section id="about" className={styles.about}>
            <div className={styles.gridLeft}>
                {iconLogo}

                <span>Das Unternehmen hat seinen Sitz in Köln und gehört zur DocCheck-Gruppe.</span>
                <span>
                    Mit überzeugendem Know-how, neuesten Technologien und kreativen Ansätzen bietet
                    antwerpes ein Full-Service-Dienstleistungsportfolio: Ob Positionierung,
                    Kampagnenidee, Omnichannel-Strategie, YouTube-Spot, Virtual Reality-App, Medical
                    Content, eDetailing oder Customer Data Platform – die rund 155 Creative Creats
                    von antwerpes planen, analysieren, beraten und realisieren.
                </span>
                <span>
                    Zu den Kunden der antwerpes ag gehören Bayer AG, Aral, Takeda Pharmaceutical,
                    Lilly, Sanofi, Stada Arzneimittel AG, Boehringer Ingelheim GmbH und viele
                    andere.
                </span>
            </div>
            <div className={styles.gridRight}>
                <h2>
                    antwerpes entwickelt{" "}
                    <span>
                        kreative <IconLogo id="iconDot2" />
                    </span>
                    Kommunikationskonzepte für den Healthcare-Markt seit 1990 und bietet innovative
                    Lösungen für Campaigning, Medical Education, Content & Relations, Digital &
                    Agile und Social Media.
                </h2>
                <p>
                    <span>
                        Im Sommersemester 2023 habe ich mein sechsmonatiges Praktikum bei der
                        antwerpes ag absolviert. Bei der antwerpes ag trafen meine beiden Berufswege
                        zusammen: Medizin und Design. Nach meiner Ausbildung als Apothekerin, habe
                        ich ein paar Jahre in einer Apotheke gearbeitet. Seit September 2021
                        studiere ich Kommunikationsdesign. Auf Grund dieser zwei Berufswege, hatte
                        ich bei meiner Bewerbung keine Zweifel daran, dass dieses Unternehmen das
                        Richtige für mich ist. Darüber hinaus war ich bereits vor Beginn meines
                        Studiums in einer Designagentur in der Ukraine als UX/UI Designerin tätig
                        und habe auch als Freelancer für einige Projekte gearbeitet, sodass ich
                        ungefähr wusste, welche Aufgaben auf mich zukommen.
                    </span>
                    <span>
                        Die Bewerbung und das Vorstellungsgespräch verliefen sehr unkompliziert und
                        angenehm. Ab April 2023 habe ich eine Stelle als Werkstudentin bekommen und
                        sammle seitdem Praxiserfahrung.
                    </span>
                    <span>
                        Mein Ziel bei der antwerpes ag war es nicht nur, Aufgaben zu erledigen oder
                        mein Wissen über Programme bezogen auf z.B. Photoshop, Illustrator etc. zu
                        verbessern, sondern auch, das ich erfahren wollte, wie Arbeits- und
                        Tagesablauf im Unternehmen organisiert sind, wie die Kommunikation zwischen
                        Kollegen aufgebaut ist und wie das Berufsleben in Deutschland allgemein
                        aussieht.
                    </span>
                </p>
            </div>
        </section>
    );
}

export const iconLogo = (
    <svg
        width="140"
        height="31"
        viewBox="0 0 140 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_9_220)">
            <path
                d="M139.886 27.0796C137.029 26.6348 134.516 24.3374 134.516 20.311V9.67127C134.516 9.11235 134.407 8.55885 134.196 8.04241C133.984 7.52597 133.673 7.05672 133.281 6.66151C132.889 6.26629 132.424 5.95286 131.912 5.73913C131.4 5.5254 130.851 5.41557 130.297 5.41591H119.747C115.755 5.41591 113.485 2.87901 113.033 4.47604e-07H132.212C133.22 -0.000345219 134.218 0.199521 135.149 0.588188C136.08 0.976855 136.926 1.54671 137.638 2.26519C138.351 2.98367 138.916 3.83671 139.302 4.77558C139.688 5.71445 139.886 6.72076 139.886 7.73702V27.0796ZM129.143 15.4767C129.143 14.2455 128.658 13.0647 127.795 12.1941C126.932 11.3235 125.761 10.8345 124.54 10.8345H113.033C113.43 13.4056 115.463 15.6714 119.035 15.6714H121.855C122.183 15.6711 122.507 15.7358 122.81 15.862C123.113 15.9881 123.388 16.1732 123.619 16.4066C123.851 16.64 124.035 16.9172 124.16 17.2222C124.285 17.5273 124.35 17.8544 124.35 18.1846V21.0373C124.35 24.6348 126.594 26.6848 129.143 27.0901V15.4767Z"
                fill="#EE7700"
            />
            <path
                d="M113.033 20.9459H117.964C118.08 20.9459 118.195 20.9701 118.302 21.017C118.409 21.0639 118.506 21.1326 118.588 21.2193C118.67 21.3059 118.735 21.4088 118.78 21.522C118.824 21.6352 118.847 21.7566 118.847 21.8791V27.0901H113.916C113.682 27.0901 113.457 26.9917 113.292 26.8167C113.126 26.6417 113.033 26.4044 113.033 26.1568V20.9459Z"
                fill="black"
            />
            <path
                d="M93.9058 25.8308C94.0752 25.9508 94.2546 26.0555 94.4422 26.1437C94.7929 26.3113 95.1548 26.4536 95.5254 26.5697C96.0433 26.733 96.5713 26.8621 97.1059 26.9562C97.774 27.072 98.4511 27.1274 99.129 27.1218C100.67 27.1218 101.85 26.8089 102.668 26.1832C103.059 25.8998 103.376 25.5236 103.591 25.0876C103.805 24.6517 103.91 24.1692 103.897 23.6827C103.897 22.752 103.58 22.0508 102.946 21.5793C102.313 21.1078 101.426 20.7914 100.285 20.6301L98.1786 20.3672C97.7224 20.3332 97.2786 20.2014 96.8767 19.9807C96.733 19.8993 96.6143 19.7794 96.5339 19.6342C96.4535 19.4889 96.4144 19.324 96.4211 19.1578C96.4211 18.3111 97.2196 17.8878 98.8166 17.8878C99.3283 17.8818 99.8394 17.9267 100.342 18.0219C100.728 18.0976 101.107 18.2022 101.478 18.3348C101.74 18.4273 101.993 18.5462 102.233 18.6897C102.36 18.7662 102.48 18.8542 102.592 18.9527C102.66 18.9235 102.723 18.8846 102.78 18.837C102.868 18.7674 102.948 18.6871 103.016 18.5977C103.096 18.4937 103.165 18.3818 103.222 18.2638C103.287 18.1278 103.319 17.9783 103.316 17.8273C103.316 17.3015 102.92 16.8966 102.129 16.5758C101.337 16.255 100.225 16.0973 98.7957 16.0973C98.0608 16.0833 97.3274 16.1717 96.6164 16.3602C96.0892 16.4984 95.595 16.7426 95.1634 17.078C94.8122 17.3575 94.5327 17.7182 94.3484 18.1297C94.1753 18.5265 94.0866 18.9555 94.0881 19.3891C94.0774 19.8434 94.1728 20.2937 94.3667 20.7038C94.5527 21.0691 94.8201 21.3859 95.1478 21.6293C95.5065 21.8954 95.9082 22.0964 96.3351 22.2235C96.8286 22.3768 97.3364 22.4782 97.8506 22.5258L99.4597 22.7152C100.204 22.7967 100.72 22.9413 101.022 23.1411C101.159 23.2391 101.27 23.3704 101.344 23.523C101.417 23.6755 101.452 23.8444 101.444 24.014C101.45 24.2283 101.387 24.4387 101.264 24.6137C101.142 24.7887 100.966 24.9188 100.764 24.9842C100.202 25.1896 99.6066 25.2851 99.0093 25.2656C98.4971 25.2687 97.9857 25.2265 97.4808 25.1393C97.0589 25.0665 96.6423 24.9655 96.2336 24.837C95.9212 24.7394 95.6143 24.6244 95.3145 24.4925C95.1331 24.4216 94.9587 24.3336 94.7937 24.2296L93.9058 25.8308ZM85.3731 19.9308C85.5109 19.5525 85.7166 19.2031 85.9798 18.9001C86.2507 18.5946 86.5814 18.3493 86.951 18.1797C87.3739 17.9951 87.8314 17.9054 88.292 17.9167C88.8394 17.8982 89.3808 18.0358 89.8543 18.3138C90.0553 18.4363 90.2197 18.6115 90.3302 18.8207C90.4407 19.0299 90.4931 19.2654 90.4818 19.5022C90.4815 19.71 90.4398 19.9156 90.3594 20.1069C90.2468 20.3345 90.064 20.519 89.8387 20.6328C89.4947 20.8145 89.1249 20.9413 88.7424 21.0088C88.1367 21.1174 87.5219 21.1658 86.9068 21.1534H86.0397C85.7507 21.1534 85.4486 21.1534 85.131 21.1323C85.1465 20.7257 85.2274 20.3243 85.3705 19.9439L85.3731 19.9308ZM91.5103 24.4137L91.1275 24.6003C90.9263 24.7003 90.7194 24.7881 90.5078 24.8633C90.2419 24.9535 89.9694 25.023 89.6928 25.071C89.3663 25.13 89.0351 25.1582 88.7034 25.1551C87.6428 25.1551 86.8269 24.936 86.2558 24.4978C85.9809 24.2943 85.7489 24.0373 85.5736 23.742C85.3984 23.4467 85.2833 23.1191 85.2351 22.7783C85.5111 22.794 85.7715 22.8046 86.0163 22.8098C86.2584 22.8098 86.5162 22.8098 86.7974 22.8098C87.7793 22.8276 88.7604 22.7475 89.7267 22.5705C90.368 22.4562 90.9847 22.2302 91.5494 21.9027C91.9608 21.6673 92.2922 21.3117 92.4997 20.8826C92.6801 20.4625 92.7714 20.009 92.7678 19.5512C92.7643 19.0934 92.6658 18.6415 92.4789 18.2244C92.2795 17.7987 91.9865 17.4246 91.6223 17.1306C91.2071 16.797 90.735 16.5431 90.2292 16.3812C89.6158 16.1843 88.9747 16.0893 88.3311 16.0999C87.5661 16.0923 86.8066 16.2296 86.0918 16.5048C85.4301 16.7635 84.8263 17.1533 84.316 17.6512C83.8083 18.1548 83.4079 18.7579 83.1391 19.4233C82.8509 20.1485 82.7076 20.9241 82.7173 21.7055C82.7017 22.502 82.8489 23.2932 83.1495 24.0298C83.4209 24.678 83.8256 25.2605 84.3368 25.7388C84.8439 26.2076 85.4414 26.5656 86.0918 26.7905C86.7852 27.0317 87.5143 27.1517 88.2477 27.1455C88.7563 27.1486 89.2642 27.1073 89.7658 27.0219C90.1774 26.9496 90.5844 26.8522 90.9843 26.73C91.2861 26.6366 91.5796 26.5179 91.8618 26.3751C92.0944 26.2489 92.268 26.1516 92.3826 26.0833L91.5103 24.4137ZM74.2237 24.7555C73.8429 24.5919 73.5018 24.3471 73.2238 24.0377C72.9418 23.7207 72.7211 23.3533 72.5728 22.9544C72.2569 22.0754 72.2569 21.1122 72.5728 20.2331C72.718 19.8425 72.9414 19.4864 73.229 19.1869C73.5166 18.8874 73.8623 18.651 74.2445 18.4925C74.6533 18.3234 75.0915 18.2384 75.5334 18.2428C75.9808 18.2371 76.4244 18.3267 76.8353 18.5057C77.2153 18.6723 77.5587 18.9137 77.8455 19.2156C78.1315 19.5175 78.3531 19.8754 78.4965 20.2673C78.6488 20.6884 78.7255 21.1336 78.723 21.5819C78.7271 22.0432 78.6504 22.5017 78.4965 22.936C78.3543 23.3378 78.1328 23.7063 77.8455 24.0193C77.5618 24.3268 77.2177 24.5712 76.8353 24.7371C76.4248 24.9172 75.9809 25.0069 75.5334 25C75.0859 25.0056 74.6423 24.916 74.2315 24.7371L74.2237 24.7555ZM70.0107 31H72.3541V25.518C72.7392 25.9962 73.226 26.3809 73.7784 26.6433C74.4277 26.9584 75.1412 27.1151 75.8614 27.1008C76.5799 27.1088 77.2927 26.9711 77.9575 26.6959C78.5845 26.4343 79.153 26.048 79.6291 25.56C80.1116 25.0605 80.4905 24.4688 80.7436 23.8195C81.0185 23.112 81.1555 22.3576 81.1472 21.5977C81.1535 20.8413 81.0129 20.0909 80.7332 19.3891C80.4745 18.7329 80.0845 18.1376 79.5875 17.6407C79.0917 17.149 78.5063 16.7588 77.8638 16.4917C77.176 16.2097 76.4396 16.0685 75.6974 16.0762C74.8992 16.0649 74.1054 16.1985 73.354 16.4706C72.679 16.7199 72.0659 17.1147 71.5574 17.6275C71.0447 18.1631 70.6515 18.8032 70.4039 19.5048C70.1142 20.3308 69.974 21.2027 69.9899 22.0789L70.0107 31ZM62.0847 26.8326H64.4281V20.7853C64.4281 19.0622 65.2327 18.2007 66.8419 18.2007C67.239 18.1956 67.6349 18.2451 68.0188 18.3479C68.3157 18.4286 68.6056 18.5332 68.8859 18.6608C69.0187 18.544 69.1275 18.4019 69.2061 18.2428C69.3327 18.0366 69.4003 17.7991 69.4014 17.5565C69.4014 17.0535 69.1297 16.6819 68.5864 16.4417C67.9142 16.1739 67.1943 16.0495 66.4721 16.0762C65.0956 16.0762 64.0185 16.4268 63.2408 17.128C62.4631 17.8291 62.0743 18.8194 62.0743 20.099L62.0847 26.8326ZM52.9324 19.9334C53.07 19.5545 53.2767 19.2049 53.5416 18.9027C53.811 18.5967 54.141 18.3512 54.5103 18.1823C54.9332 17.9977 55.3907 17.908 55.8512 17.9194C56.3986 17.9004 56.9402 18.038 57.4135 18.3164C57.615 18.4386 57.78 18.6136 57.8909 18.8228C58.0018 19.0321 58.0546 19.2677 58.0436 19.5048C58.0436 19.7129 58.0011 19.9188 57.9186 20.1095C57.806 20.3371 57.6233 20.5217 57.3979 20.6354C57.0547 20.8168 56.6858 20.9436 56.3043 21.0114C55.6976 21.1199 55.082 21.1683 54.466 21.156H53.5989C53.3099 21.156 53.0079 21.156 52.6928 21.135C52.7062 20.7283 52.7863 20.3267 52.9297 19.9465L52.9324 19.9334ZM59.0695 24.4163L58.6868 24.603C58.4855 24.7029 58.2786 24.7907 58.0671 24.8659C57.4854 25.0619 56.8758 25.1604 56.2626 25.1578C55.202 25.1578 54.387 24.9386 53.8176 24.5004C53.5419 24.2975 53.3092 24.0407 53.1335 23.7454C52.9577 23.45 52.8424 23.122 52.7944 22.7809C53.0704 22.7967 53.3307 22.8072 53.5755 22.8124C53.8176 22.8124 54.0754 22.8124 54.3566 22.8124C55.3385 22.8302 56.3197 22.7501 57.2859 22.5732C57.9324 22.4598 58.5544 22.2339 59.1242 21.9053C59.5347 21.6695 59.8651 21.3139 60.072 20.8852C60.3573 20.2501 60.4262 19.5374 60.2679 18.8586C60.1096 18.1798 59.7331 17.573 59.1971 17.1332C58.7807 16.8002 58.3078 16.5463 57.8015 16.3839C57.188 16.1869 56.5469 16.0919 55.9033 16.1025C55.1384 16.0949 54.3788 16.2323 53.664 16.5074C53.0026 16.7668 52.399 17.1565 51.8882 17.6538C51.3814 18.1576 50.9818 18.7607 50.7139 19.4259C50.4237 20.1506 50.2794 20.9265 50.2895 21.7081C50.2747 22.5048 50.4227 23.2961 50.7243 24.0324C50.9948 24.6805 51.3986 25.263 51.9091 25.7414C52.4162 26.2102 53.0136 26.5682 53.664 26.7932C54.3575 27.0343 55.0866 27.1543 55.82 27.1481C56.3286 27.1512 56.8365 27.1099 57.338 27.0245C57.7497 26.9523 58.1566 26.8548 58.5566 26.7327C58.8585 26.6397 59.1521 26.521 59.4341 26.3777C59.6684 26.2515 59.8376 26.1542 59.9548 26.0859L59.0695 24.4163ZM38.7182 26.8536C38.8276 26.5627 38.9725 26.1358 39.153 25.5732C39.3301 25.0105 39.528 24.3953 39.7389 23.7327C39.9498 23.0701 40.1659 22.3812 40.3794 21.6792C40.5929 20.9772 40.7882 20.3357 40.9679 19.752C41.1475 20.3357 41.3428 20.9798 41.5563 21.6792C41.7699 22.3786 41.986 23.0648 42.2073 23.7327C42.4286 24.4005 42.6291 25.0158 42.8166 25.5732C43.0041 26.1306 43.1499 26.5618 43.2592 26.8536H45.6964C46.0436 26.0631 46.4072 25.177 46.7874 24.1954C47.1675 23.2138 47.5329 22.2559 47.8836 21.3216C48.2308 20.3839 48.5397 19.5118 48.8105 18.7055C49.0813 17.8992 49.274 17.2673 49.3886 16.8098C49.2652 16.7215 49.1345 16.6441 48.998 16.5784C48.7143 16.4435 48.4026 16.3795 48.0893 16.3918C47.9239 16.3779 47.7574 16.3974 47.5995 16.4494C47.4417 16.5013 47.2957 16.5845 47.1701 16.6941C46.9356 16.9657 46.7694 17.2904 46.6858 17.6407C46.3682 18.7818 46.021 19.9211 45.6443 21.0587C45.2676 22.1963 44.8988 23.248 44.5377 24.2138C44.3745 23.7441 44.1931 23.2024 43.9935 22.5889C43.7939 21.9755 43.589 21.326 43.379 20.6407C43.1707 19.9728 42.965 19.2971 42.7593 18.6082C42.5536 17.9194 42.3609 17.2647 42.1813 16.6389C42.1266 16.61 41.9886 16.56 41.7673 16.4812C41.5278 16.4021 41.277 16.3639 41.0252 16.3681C40.6814 16.338 40.3389 16.4383 40.0644 16.6494C39.8414 16.8782 39.6817 17.1619 39.6009 17.4724C39.4499 18.014 39.2832 18.5872 39.1062 19.1919C38.9291 19.7967 38.7442 20.3935 38.5594 20.9851C38.3745 21.5767 38.1948 22.1472 38.023 22.7046C37.8511 23.262 37.6871 23.7564 37.5361 24.1823C37.3729 23.6985 37.1837 23.1464 36.9684 22.5258C36.7532 21.9053 36.5371 21.2559 36.3201 20.5776C36.0996 19.8957 35.8861 19.2112 35.6796 18.5241C35.4739 17.8379 35.2864 17.1884 35.1223 16.5758C35.011 16.5283 34.8971 16.487 34.7813 16.4522C34.5497 16.3889 34.3102 16.3606 34.0704 16.3681C33.9191 16.3523 33.7662 16.3693 33.6219 16.4181C33.4776 16.4668 33.3453 16.5461 33.2339 16.6507C33.1224 16.7552 33.0344 16.8827 32.9757 17.0244C32.917 17.1661 32.889 17.3188 32.8935 17.4724C32.914 17.7585 32.9655 18.0416 33.0471 18.3164C33.1513 18.7125 33.3301 19.2752 33.5835 20.0044C33.8369 20.7336 34.1841 21.6538 34.625 22.7651C35.0573 23.8782 35.611 25.2331 36.2863 26.83L38.7182 26.8536ZM25.6758 23.6985C25.6555 24.1553 25.7272 24.6114 25.8866 25.0394C26.0459 25.4673 26.2895 25.8582 26.6027 26.1884C27.2224 26.823 28.1381 27.1393 29.3497 27.1376C29.7441 27.1403 30.1376 27.1015 30.524 27.0219C30.8548 26.9548 31.1796 26.8607 31.4952 26.7406C31.7496 26.6467 31.9946 26.5288 32.2269 26.3882C32.4274 26.262 32.581 26.1595 32.693 26.0754L31.7426 24.4978C31.5125 24.6498 31.2628 24.7693 31.0005 24.8528C30.6427 24.9802 30.2655 25.0434 29.8861 25.0394C29.6459 25.0408 29.4065 25.0134 29.1727 24.9579C28.954 24.9068 28.7495 24.8071 28.5738 24.6661C28.3965 24.5188 28.2586 24.329 28.1728 24.1139C28.0667 23.8312 28.0172 23.53 28.027 23.2279V18.5556H31.99C32.053 18.4167 32.1086 18.2746 32.1566 18.1297C32.2259 17.9177 32.2602 17.6956 32.2582 17.4724C32.2692 17.3233 32.2501 17.1736 32.2023 17.0321C32.1544 16.8907 32.0786 16.7605 31.9796 16.6494C31.7083 16.4339 31.3648 16.3331 31.0214 16.3681H28.0166V13.6363C27.9489 13.61 27.8083 13.5653 27.5948 13.5022C27.3695 13.4375 27.1363 13.4056 26.9021 13.4075C26.5786 13.3898 26.2586 13.4824 25.9934 13.6705C25.8773 13.7761 25.7872 13.9076 25.7302 14.0546C25.6733 14.2016 25.6511 14.3599 25.6653 14.5171L25.6758 23.6985ZM13.1463 26.8536H15.4897V21.1218C15.4897 20.1779 15.7136 19.4575 16.1589 18.9658C16.6041 18.4741 17.2785 18.2244 18.1716 18.2244C19.0647 18.2244 19.7209 18.4715 20.1739 18.9658C20.627 19.4601 20.8561 20.1779 20.8561 21.1218V26.8326H23.1995V20.5223C23.2106 19.8813 23.0845 19.2455 22.8298 18.6582C22.5909 18.1197 22.2349 17.6425 21.7883 17.262C21.3219 16.8697 20.7842 16.5732 20.2052 16.3891C19.5507 16.1818 18.8679 16.0798 18.182 16.0868C17.4995 16.0794 16.8201 16.1814 16.1693 16.3891C15.5887 16.5745 15.0493 16.8718 14.5809 17.2647C14.1364 17.6471 13.7808 18.1238 13.5394 18.6608C13.2767 19.2459 13.146 19.8826 13.1567 20.525L13.1463 26.8536ZM8.39952 25.2287C8.27715 25.255 8.02718 25.2945 7.65744 25.3418C7.15692 25.3981 6.6534 25.4227 6.14984 25.4154C5.67605 25.4236 5.20258 25.3857 4.73597 25.3024C4.41867 25.2481 4.11409 25.1348 3.83766 24.9684C3.63565 24.8426 3.47454 24.6598 3.37419 24.4426C3.28195 24.225 3.23582 23.9904 3.23879 23.7537C3.21961 23.4927 3.26869 23.2312 3.38111 22.9954C3.49353 22.7596 3.66534 22.5578 3.87932 22.4102C4.30635 22.1262 4.98594 21.9816 5.92331 21.9816C6.49215 21.9718 7.06101 21.9999 7.62619 22.0657C8.00288 22.1201 8.26326 22.1621 8.40734 22.1919L8.39952 25.2287ZM10.7429 20.5381C10.762 19.8292 10.6241 19.125 10.3394 18.4768C10.0885 17.9279 9.70094 17.4541 9.21451 17.1017C8.69514 16.7356 8.1094 16.4765 7.4908 16.3392C6.21148 16.0653 4.89378 16.0261 3.60071 16.2235C3.2382 16.2841 2.88698 16.4002 2.55919 16.5679C2.33412 16.6793 2.14463 16.8524 2.0124 17.0675C1.91243 17.2418 1.85862 17.4392 1.85617 17.6407C1.84855 17.8953 1.92554 18.1452 2.07489 18.3506C2.17467 18.4937 2.28804 18.6267 2.41338 18.7476C2.70415 18.5511 3.02048 18.3962 3.35335 18.2875C3.96271 18.0898 4.60151 18.0008 5.24111 18.0245C5.67039 18.0208 6.09914 18.056 6.52218 18.1297C6.8735 18.1857 7.21002 18.3127 7.51163 18.5031C7.79205 18.6896 8.01704 18.9495 8.16258 19.255C8.33341 19.6342 8.41454 20.0482 8.39952 20.4645C8.16518 20.4356 7.81367 20.404 7.358 20.3698C6.90234 20.3357 6.39459 20.3173 5.87123 20.3173C5.09493 20.3046 4.31959 20.3778 3.55906 20.5355C3.00793 20.6465 2.48513 20.8702 2.02281 21.1928C1.64462 21.4655 1.3511 21.8412 1.17658 22.2761C0.99527 22.755 0.906872 23.2647 0.916195 23.7774C0.916429 24.2074 0.989522 24.6343 1.13231 25.0394C1.29252 25.4707 1.57172 25.8466 1.93689 26.1227C2.4187 26.4778 2.96572 26.7326 3.54604 26.872C4.39826 27.0661 5.27145 27.15 6.14463 27.1218C6.68101 27.1218 7.20177 27.1078 7.70691 27.0797C8.20163 27.0535 8.64688 27.0219 9.04787 26.9877C9.44885 26.9535 9.79256 26.9167 10.0894 26.8826C10.3862 26.8484 10.6102 26.8168 10.7403 26.7879L10.7429 20.5381Z"
                fill="black"
            />
        </g>
        <defs>
            <clipPath id="clip0_9_220">
                <rect width="140" height="31" fill="white" />
            </clipPath>
        </defs>
    </svg>
);
