import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Heart_After = ({width = 20, height = 20, ...props}) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 15 15"
    {...props}
  >
    <Path
      fill="red"
      d="M4.036 1a4.036 4.036 0 0 0-2.854 6.89l5.964 5.964a.5.5 0 0 0 .708 0l5.964-5.965a4.036 4.036 0 0 0-5.707-5.707l-.611.61-.61-.61A4.036 4.036 0 0 0 4.035 1Z"
    />
  </Svg>
)
export default Heart_After
