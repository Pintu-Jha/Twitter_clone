import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const BookMark_Before = ({width = 20, height = 20, ...props}) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    stroke="#fff"
    viewBox="0 0 24 24"
    {...props}>
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M4 5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v15.138a1.5 1.5 0 0 1-2.244 1.303l-5.26-3.006a1 1 0 0 0-.992 0l-5.26 3.006A1.5 1.5 0 0 1 4 20.138V5zm11 4a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h6z"
      clipRule="evenodd"
    />
  </Svg>
);
export default BookMark_Before;
