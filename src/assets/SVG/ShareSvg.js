import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';
const ShareSvg = ({width = 18, height = 18, ...props}) => (
  <Svg width={width} height={height} fill="none" viewBox="0 0 24 24" {...props}>
    <G stroke="#85868a" strokeWidth={1.5}>
      <Path d="M9 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
      <Path strokeLinecap="round" d="M14 6.5 9 10M14 17.5 9 14" />
      <Path d="M19 18.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM19 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
    </G>
  </Svg>
);
export default ShareSvg;
