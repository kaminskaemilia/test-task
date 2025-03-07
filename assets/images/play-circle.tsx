import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";
const PlayCircleIcon = () => (
    <Svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
    >
        <Rect x={1} y={1} width={18} height={18} rx={9} fill="#FFE74C" />
        <Rect
            x={1}
            y={1}
            width={18}
            height={18}
            rx={9}
            stroke="#FEFEFE"
            strokeWidth={2}
        />
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.875 7.35528C7.875 6.76106 8.51208 6.38437 9.03275 6.67074L13.8413 9.31546C14.381 9.61228 14.381 10.3877 13.8413 10.6845L9.03275 13.3293C8.51208 13.6156 7.875 13.2389 7.875 12.6447V7.35528Z"
            fill="#0F172A"
        />
    </Svg>
);
export default PlayCircleIcon;
