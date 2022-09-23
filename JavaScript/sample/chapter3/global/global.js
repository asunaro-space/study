

	let test = true;
	if (test) {
		global.food = 'ケーキ';
		console.log('ローカルスコープ :', food);
		console.log('ローカルスコープ :', console.food);
	}
	console.log('グローバルスコープ :', food);
	console.log('グローバルスコープ :', console.food);

