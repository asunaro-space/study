

	// 配列を作成
	const obj = {menuA: 'コーヒー', menuB: '紅茶', menuC: 'ジュース'};

	// 分割代入
	const {menuA, ...menu} = obj;

	// コンソールに出力
	console.log(menuA, menu);

