import React from 'react';
import {AbsoluteFill, useVideoConfig} from 'remotion';

export const Clouds = () => {
	const videoConfig = useVideoConfig();
	return (
		<AbsoluteFill>
			<svg
				style={{width: videoConfig.width, transform: 'scale(1.5)', zIndex: 1}}
				viewBox="0 0 871 115"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<ellipse cx="153" cy="11" rx="99" ry="56" fill="#8D8D8D" />
				<ellipse cx="665" cy="24" rx="99" ry="56" fill="#8D8D8D" />
				<ellipse cx="118" cy="45" rx="35" ry="27" fill="#8D8D8D" />
				<circle cx="418.5" cy="39.5" r="28.5" fill="#8D8D8D" />
				<ellipse cx="182.5" cy="51" rx="29.5" ry="27" fill="#8D8D8D" />
				<ellipse cx="621.5" cy="88" rx="29.5" ry="27" fill="#8D8D8D" />
				<ellipse cx="722" cy="61" rx="42" ry="27" fill="#8D8D8D" />
				<ellipse cx="543.5" cy="72" rx="29.5" ry="27" fill="#8D8D8D" />
				<ellipse cx="433.5" cy="66" rx="29.5" ry="27" fill="#8D8D8D" />
				<ellipse cx="300.5" cy="59" rx="29.5" ry="27" fill="#8D8D8D" />
				<ellipse cx="673.5" cy="80" rx="29.5" ry="27" fill="#8D8D8D" />
				<ellipse cx="494" cy="59.5" rx="26" ry="35.5" fill="#8D8D8D" />
				<ellipse cx="368.5" cy="56" rx="29.5" ry="27" fill="#8D8D8D" />
				<ellipse cx="389.5" cy="11" rx="77.5" ry="56" fill="#8D8D8D" />
				<ellipse cx="632.5" cy="56" rx="77.5" ry="56" fill="#8D8D8D" />
				<ellipse cx="466.5" cy="39" rx="77.5" ry="56" fill="#8D8D8D" />
				<ellipse cx="565.5" cy="39" rx="77.5" ry="56" fill="#8D8D8D" />
				<ellipse cx="325" cy="32" rx="73" ry="56" fill="#8D8D8D" />
				<ellipse cx="243" cy="24" rx="69" ry="56" fill="#8D8D8D" />
			</svg>
		</AbsoluteFill>
	);
};
