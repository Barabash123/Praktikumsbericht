export const IconLogo = ({ id }: { id: string }) => {
    return (
        <svg
            id={id}
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="9" cy="9" r="9" fill="url(#paint0_linear_8_178)" />
            <defs>
                <linearGradient
                    id="paint0_linear_8_178"
                    x1="3.85714"
                    y1="1.65306"
                    x2="13.4082"
                    y2="15.9796"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FF7D00" />
                    <stop offset="1" stop-color="#FF4800" />
                </linearGradient>
            </defs>
        </svg>
    );
};
