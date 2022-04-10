import React, {useMemo} from 'react';
import {AbsoluteFill, random, useVideoConfig} from 'remotion';
import {Clouds} from './Clouds';
import {RainDrop} from './RainDrop';

export const Rain = () => {
	const videoConfig = useVideoConfig();
	const drops = useMemo(() => {
		return new Array(300).fill(true).map((_, i) => {
			const x = random('x' + i) * 100 + '%';
			const delay = random('delay' + i) * videoConfig.durationInFrames;
			const size = random('size' + i) + 0.1;
			return {x, delay, size};
		});
	}, []);

	return (
		<AbsoluteFill style={{backgroundColor: '#C4C4C4'}}>
			<Clouds />
			{drops.map((drop) => (
				<RainDrop x={drop.x} delay={drop.delay} size={drop.size} />
			))}
		</AbsoluteFill>
	);
};
