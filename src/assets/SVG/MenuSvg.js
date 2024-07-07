import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const MenuSvg = ({width = 15, height = 15, ...props}) => (
  <Svg width={width} height={height} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      stroke="gray"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 5a1 1 0 1 0-2 0 1 1 0 0 0 2 0ZM13 12a1 1 0 1 0-2 0 1 1 0 0 0 2 0ZM13 19a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"
    />
  </Svg>
);
export default MenuSvg;
