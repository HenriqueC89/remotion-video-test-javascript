import {Sequence} from 'remotion';
import {Rain} from './Components/Rain';
import {Flowers} from './Components/Flowers';

export const RainScene = () => {
	return (
		<>
			<Sequence from={0}>
				<Rain />
			</Sequence>
			<Sequence from={35}>
				<Flowers />
			</Sequence>
		</>
	);
};
