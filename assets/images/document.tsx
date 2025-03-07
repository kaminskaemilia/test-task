import * as React from "react";
import Svg, { Path } from "react-native-svg";
const DocumentIcon = () => (
    <Svg
        width={16}
        height={16}
        viewBox="0 0 16 16"
        fill="none"
    >
        <Path
            d="M13 9.5V7.75C13 6.50736 11.9926 5.5 10.75 5.5H9.75C9.33579 5.5 9 5.16421 9 4.75V3.75C9 2.50736 7.99264 1.5 6.75 1.5H5.5M6 11V11.5M8 9.5V11.5M10 8V11.5M7 1.5H3.75C3.33579 1.5 3 1.83579 3 2.25V13.75C3 14.1642 3.33579 14.5 3.75 14.5H12.25C12.6642 14.5 13 14.1642 13 13.75V7.5C13 4.18629 10.3137 1.5 7 1.5Z"
            stroke="#010101"
            strokeWidth={1.25}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);
export default DocumentIcon;
