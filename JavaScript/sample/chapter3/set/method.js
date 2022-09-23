

	// セットを作成
	const mySet = new Set();
	mySet.add('コーヒー');
	mySet.add('紅茶');
	mySet.add('ケーキ');

	// コンソールに出力
	console.log('サイズ :', mySet.size);

	// 全ての値を出力
	mySet.forEach(function(value1, value2) {
		console.log('forEach : ', value1, ' : ', value2);
	});

