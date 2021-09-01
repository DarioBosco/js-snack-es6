/*
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
Usiamo i nuovi metodi degli array foreach o filter. 
*/

const numbers = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];

/* Utilizzando forEach */
function getElementsInBetweenForEach(array, start, end) {
	tmpArray = [];
	return array.forEach((element, index) => {
		if (start <= index && end >= index) {
			tmpArray.push(element);
		}
	});
}

const forEachNumbers = getElementsInBetweenFilter(numbers, 0, 4);
console.log('forEach: ', forEachNumbers);

/* Utilizzando filter */
function getElementsInBetweenFilter(array, start, end) {
	return array.filter((element, index) => {
		return start <= index && end >= index;
	});
}

const filterNumbers = getElementsInBetweenFilter(numbers, 5, 9);
console.log('filter: ', filterNumbers);
