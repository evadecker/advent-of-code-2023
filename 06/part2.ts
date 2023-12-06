import { calculateDistance } from "./part1";

export const solve = (input: string) => {
	const time = parseInt(
		input.split("\n")[0].split(":")[1].trim().replaceAll(" ", ""),
	);
	const recordDistance = parseInt(
		input.split("\n")[1].split(":")[1].trim().replaceAll(" ", ""),
	);

	for (let delay = 1; delay < time; delay++) {
		const distance = calculateDistance(delay, time);
		if (distance > recordDistance) {
			return time - delay * 2 + 1;
		}
	}
};
