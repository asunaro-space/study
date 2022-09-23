

	// 配列を作成
	const arr = [10, 20, 30, 40];

	// .reduceRight()を実行
	const sum = arr.reduceRight((a, b, i) => {
		console.log(i, a, b);
		return a + b;
	}, 0);
	console.log(sum);
