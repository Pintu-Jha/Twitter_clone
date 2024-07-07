import * as React from "react"
import Svg, { Path } from "react-native-svg"
const LogoSvg = ({width = 20, height = 20, ...props}) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M301.026 37.125h54.582l-119.246 136.29 140.283 185.46h-109.84l-86.031-112.48-98.439 112.48H27.72l127.545-145.777L20.691 37.125H133.32l77.764 102.812 89.942-102.812Zm-19.157 289.08h30.245L116.886 68.079H84.43L281.87 326.205Z"
    />
  </Svg>
)
export default LogoSvg
