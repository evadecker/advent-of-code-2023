export const calculateDistance = (delay: number, totalTime: number) => {
	return delay * (totalTime - delay);
};

export const solve = (input: string) => {
	const times = input
		.split("\n")[0]
		.split(":")[1]
		.trim()
		.split(/\s+/)
		.map(Number);

	const recordDistances = input
		.split("\n")[1]
		.split(":")[1]
		.trim()
		.split(/\s+/)
		.map(Number);

	let marginsOfError: number[] = [];

	for (const [i, time] of times.entries()) {
		let numberOfWinningOutcomes = 0;

		for (let delay = 1; delay < time; delay++) {
			const distance = calculateDistance(delay, time);
			if (distance > recordDistances[i]) {
				numberOfWinningOutcomes++;
			}
		}

		marginsOfError.push(numberOfWinningOutcomes);
	}

	let sum = 1;

	for (let i = 0; i < marginsOfError.length; i++) {
		sum *= marginsOfError[i];
	}

	return sum;
};
