import {Composition} from 'remotion';
import {RainScene} from './RainScene';
export const RemotionVideo = () => {
	return (
		<>
			<Composition
				id="RainScene"
				component={RainScene}
				durationInFrames={210}
				fps={30}
				width={1920}
				height={1080}
			/>
		</>
	);
};
