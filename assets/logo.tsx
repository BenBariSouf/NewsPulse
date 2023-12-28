import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const AppLogo = (props: SvgProps) => (
	<Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 1200 1200" {...props}>
		<Path
			fill="#fce020"
			d="M660 90c-264 0-482.4 201.6-507.6 459.6h-72c-27.602 0-50.398 22.801-50.398 50.398 0 27.602 22.801 50.398 50.398 50.398h388.8c19.199 0 36-10.801 44.398-27.602l42-81.602 128.4 248.41c8.398 16.801 25.199 27.602 44.398 27.602s36-10.801 44.398-27.602l72-140.4h72c27.602 0 50.398-22.801 50.398-50.398 0-27.602-22.801-50.398-50.398-50.398h-102c-19.199 0-36 10.801-44.398 27.602l-42 81.602-128.4-247.21c-16.801-33.602-72-33.602-88.801 0l-72 140.4-186 .004c25.199-202.8 198-360 406.8-360 225.6 0 410.4 183.6 410.4 410.4 0 226.8-184.8 409.2-410.4 409.2-170.4 0-318-105.6-379.2-254.4h-106.8c66 205.2 259.2 354 486 354 280.8 0 510-229.2 510-510s-229.2-510-510-510z"
		/>
	</Svg>
);
export default AppLogo;
