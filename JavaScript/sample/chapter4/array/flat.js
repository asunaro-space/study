

	// 配列を作成してコンソールに出力
	const arr = [1, 2, [3, 4], [[5, 6], [[7, 8], [9, 10]]]];
	console.log(arr);

	// .flat()で平坦化してコンソールに出力
	console.log(arr.flat());
	console.log(arr.flat(2));
	console.log(arr.flat(Infinity));

	// 元の配列をコンソールに出力
	console.log(arr);

