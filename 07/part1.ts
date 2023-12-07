type Hand = {
	hand: string;
	bid: number;
};

// Ordered from strongest to weakest
const card = [
	"A",
	"K",
	"Q",
	"J",
	"T",
	"9",
	"8",
	"7",
	"6",
	"5",
	"4",
	"3",
	"2",
] as const;
type Card = (typeof card)[number];

// Ordered from strongest to weakest
const type = [
	"five of a kind",
	"four of a kind",
	"full house",
	"three of a kind",
	"two pair",
	"one pair",
	"high card",
] as const;
export type Type = (typeof type)[number];

export const getHandType = (hand: string): Type => {
	switch (new Set(hand).size) {
		case 1:
			return "five of a kind";

		case 2: {
			let counts = {};
			for (const card of hand) counts[card] = (counts[card] || 0) + 1;
			if (Object.values(counts).includes(4)) return "four of a kind";
			return "full house";
		}

		case 3: {
			let counts = {};
			for (const card of hand) counts[card] = (counts[card] || 0) + 1;
			if (Object.values(counts).includes(3)) return "three of a kind";
			return "two pair";
		}

		case 4:
			return "one pair";

		case 5:
			return "high card";
	}
};

export const getStrongerHand = (hand1: string, hand2: string): number => {
	const type1 = getHandType(hand1);
	const type2 = getHandType(hand2);

	if (type.indexOf(type1) < type.indexOf(type2)) return 1;
	if (type.indexOf(type1) > type.indexOf(type2)) return -1;

	for (let i = 0; i < hand1.length; i++) {
		const hand1Card = hand1[i] as Card;
		const hand2Card = hand2[i] as Card;

		if (card.indexOf(hand1Card) < card.indexOf(hand2Card)) {
			return 1;
		}
		if (card.indexOf(hand1Card) > card.indexOf(hand2Card)) {
			return -1;
		}
	}

	return 0;
};

export const solve = (input: string): number => {
	const hands: Hand[] = input.split("\n").map((line) => {
		const [hand, bid] = line.split(" ");
		return { hand, bid: parseInt(bid) };
	});

	hands.sort((a, b) => getStrongerHand(a.hand, b.hand));

	let sum = 0;

	for (let i = 0; i < hands.length; i++) {
		sum += hands[i].bid * (i + 1);
	}

	return sum;
};
