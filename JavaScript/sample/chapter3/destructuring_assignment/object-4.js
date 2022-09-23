

	// @see 配列を作成 見直しが必要
	const obj = {menuA: 'コーヒー', menuB: '紅茶', menuC: 'ジュース'};

	// 分割代入
	const {menuA = 'ほうじ茶', menuD = 'そば茶'} = obj;

	// コンソールに出力
	console.log(menuA, menuD);
