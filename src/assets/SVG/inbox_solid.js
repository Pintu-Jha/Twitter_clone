import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const Inbox_solid = ({width = 30, height = 30, ...props}) => (
  <Svg width={width} height={height} fill="none" {...props}>
    <Path
      fill="#fff"
      d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z"
    />
    <Path
      fill="#fff"
      d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z"
    />
  </Svg>
);
export default Inbox_solid;
