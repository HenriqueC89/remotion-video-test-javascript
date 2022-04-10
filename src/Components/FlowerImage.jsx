import {Img, interpolate, useCurrentFrame} from 'remotion';
import flower from '../Assets/flower.png';

export const FlowerImage = ({right, delay, height}) => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame - delay, [0, 30], [0, 1]);
	return (
		<Img
			src={flower}
			style={{height, position: 'absolute', bottom: -5, right, opacity}}
		/>
	);
};
