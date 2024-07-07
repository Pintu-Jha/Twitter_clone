import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const Search_solid = ({width = 30, height = 30, ...props}) => (
  <Svg width={width} height={height} fill="none" {...props}>
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default Search_solid;
