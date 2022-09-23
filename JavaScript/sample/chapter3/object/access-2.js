

	// 入れ子のオブジェクトを作成
	const menu = {
		coffee: {name: 'コーヒー', price: 450},
		cake: {name: 'ケーキ', price: 600}
	};

	// プロパティ値の出力
	console.log(menu.coffee.name);
	console.log(menu['cake']['name']);
	console.log(menu['cake'].price);

	// プロパティを変数に代入
	const coffee = menu.coffee;

	// プロパティ値の出力
	console.log(coffee.price);

