/*
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
Usiamo i nuovi metodi degli array foreach o filter. 
*/

const numbers = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];

const getElementsInBetween = (array, start, end) => {
	const newArray = [];
	if (start < end) {
		array.forEach((element, index) => {
			if (start <= index && end >= index) {
				newArray.push(element);
			}
		});
	} else {
		console.log('I valori inseriti non sono validi');
	}
	console.log(newArray);
	return;
};

getElementsInBetween(numbers, 2, 7);
