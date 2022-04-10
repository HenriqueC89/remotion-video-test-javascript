import React, {useMemo} from 'react';
import {random} from 'remotion';
import {FlowerImage} from './FlowerImage';

export const Flowers = () => {
	const growth = useMemo(() => {
		return new Array(100).fill(true).map((_, i) => {
			const right = Math.floor(random('abcdef' + i) * 100) + '%';
			const delay = random('delay' + i) * 120;
			const height = Math.floor('2' + random('height' + i) * 10) + '%';
			return {right, delay, height};
		});
	}, []);

	return (
		<>
			{growth.map((flower) => (
				<FlowerImage
					right={flower.right}
					delay={flower.delay}
					height={flower.height}
				/>
			))}
		</>
	);
};
