import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

export const RainDrop = ({delay, x, size}) => {
	const {fps} = useVideoConfig();
	const frame = useCurrentFrame();
	const drop = spring({
		fps,
		frame: frame - delay,
		config: {
			stiffness: 20,
		},
	});
	const top = interpolate(drop, [0, 1], [-0.2, 1.1]);
	return (
		<div>
			<svg
				style={{
					width: 100,
					position: 'absolute',
					left: x,
					top: top * 100 + '%',
					transform: `scale(${size})`,
				}}
			>
				<line
					x1="50"
					y1="0"
					x2="50"
					y2="100"
					style={{
						stroke: 'rgb(0,0,255)',
						strokeWidth: 2,
					}}
				/>
			</svg>
		</div>
	);
};
