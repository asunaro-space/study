
	// 配列を作成
	const arr = ['コーヒー', '紅茶', 'ケーキ'];

	// iteratorを得る
	const iterator = arr.entries();

	// 繰り返し処理で、コンソールに出力
	for (const entry of iterator) {
		console.log(entry);
	}