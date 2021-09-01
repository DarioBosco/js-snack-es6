//Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
//Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
const teams = [
	{ name: 'Team 1', scores: 0, sufferedPenalties: 0 },
	{ name: 'Team 2', scores: 0, sufferedPenalties: 0 },
	{ name: 'Team 3', scores: 0, sufferedPenalties: 0 },
	{ name: 'Team 4', scores: 0, sufferedPenalties: 0 },
	{ name: 'Team 5', scores: 0, sufferedPenalties: 0 },
	{ name: 'Team 6', scores: 0, sufferedPenalties: 0 },
	{ name: 'Team 7', scores: 0, sufferedPenalties: 0 },
	{ name: 'Team 8', scores: 0, sufferedPenalties: 0 },
];

//Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti
const insights = [];

//Funzione per generare il numero random
const randomInt = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};
for (let i = 0; i < teams.length; i++) {
	const element = teams[i];
	//Assegno i numeri random alle proprietà scores e sufferedPenalties
	element.scores = randomInt(1, 10);
	element.sufferedPenalties = randomInt(1, 10);
	//Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
	const { name, scores } = element;
	insights.push({
		name: name,
		scores: scores,
	});
}

console.log(insights);
