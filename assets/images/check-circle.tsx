import * as React from "react";
import Svg, { G, Rect, Path, Defs, ClipPath } from "react-native-svg";
const CheckCircleIcon = () => (
    <Svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
    >
        <G clipPath="url(#clip0_20029_19711)">
            <Rect width={20} height={20} rx={10} fill="#010101" />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.25 10C0.25 4.61522 4.61522 0.25 10 0.25C15.3848 0.25 19.75 4.61522 19.75 10C19.75 15.3848 15.3848 19.75 10 19.75C4.61522 19.75 0.25 15.3848 0.25 10ZM13.6103 8.18593C13.8511 7.84887 13.773 7.38046 13.4359 7.1397C13.0989 6.89894 12.6305 6.97701 12.3897 7.31407L9.1543 11.8436L7.53033 10.2197C7.23744 9.92678 6.76256 9.92678 6.46967 10.2197C6.17678 10.5126 6.17678 10.9874 6.46967 11.2803L8.71967 13.5303C8.87556 13.6862 9.09215 13.7656 9.31186 13.7474C9.53157 13.7293 9.73216 13.6153 9.8603 13.4359L13.6103 8.18593Z"
                fill="#FFE74C"
            />
        </G>
        <Rect
            x={1}
            y={1}
            width={18}
            height={18}
            rx={9}
            stroke="#FEFEFE"
            strokeWidth={2}
        />
        <Defs>
            <ClipPath id="clip0_20029_19711">
                <Rect width={20} height={20} rx={10} fill="white" />
            </ClipPath>
        </Defs>
    </Svg>
);
export default CheckCircleIcon;
