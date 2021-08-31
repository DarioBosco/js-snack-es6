/* 
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
BONUS: inserire una arrow function che preso in input l'array di bici ritorni l'oggetto con bici più leggera
*/

//Creare un array di oggetti:
//Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.

const bikes = [
	{ name: 'Bici 1', weight: 12 },
	{ name: 'Bici 2', weight: 14 },
	{ name: 'Bici 3', weight: 6 },
	{ name: 'Bici 4', weight: 24 },
	{ name: 'Bici 5', weight: 14 },
	{ name: 'Bici 6', weight: 7.5 },
	{ name: 'Bici 7', weight: 15 },
	{ name: 'Bici 8', weight: 5 },
	{ name: 'Bici 9', weight: 13 },
	{ name: 'Bici 10', weight: 8.3 },
];

//Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

let lighterBikeWeight;
let lighterBikeName;

for (let i = 0; i < bikes.length; i++) {
	const element = bikes[i];
	const { name, weight } = element;
	if (lighterBikeWeight == undefined || weight < lighterBikeWeight) {
		lighterBikeWeight = weight;
		lighterBikeName = name;
	}
}
console.log(`La bici piu' leggera e' ${lighterBikeName} con un peso di ${lighterBikeWeight} kg.`);
