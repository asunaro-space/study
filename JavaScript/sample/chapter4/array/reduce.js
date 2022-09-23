

	// 配列を作成
	const arr = [10, 20, 30, 40];

	// 初期値なしの.reduce()
	console.log('- reduce1 -');
	const sum1 = arr.reduce((a, b, i) => {
		console.log(i, a, b);
		return a + b;
	});
	console.log(sum1);

	// 初期値ありの.reduce()
	console.log('- reduce2 -');
	const sum2 = arr.reduce((a, b, i) => {
		console.log(i, a, b);
		return a + b;
	}, 10000);
	console.log(sum2);
