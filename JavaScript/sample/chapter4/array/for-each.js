

	// 配列とカウンターを作成
	const arr = [1,2,,,,,,3];
	let cnt = 0;

	// .forEach()で各要素を処理
	arr.forEach((x, i) => {
		console.log(`要素${i}、値は「${x}」`);
		cnt ++;
	});

	// コンソールに出力
	console.log(`要素数は${arr.length}、実行数は${cnt}`);