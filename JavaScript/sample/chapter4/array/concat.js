

	// 配列を作成
	const arr1 = ['コーヒー', '紅茶'];
	const arr2 = ['ケーキ', 'クッキー'];
	const arr3 = ['サンドイッチ', 'トースト'];

	// .concat()で結合してコンソールに出力
	console.log(arr1.concat(arr2, arr3));
	console.log(arr1.concat('プリン', arr2, 'ゼリー'));

	// 元の配列は影響を受けない
	console.log(arr1);

