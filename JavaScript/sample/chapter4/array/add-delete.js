

	// 配列を作成してコンソールに出力
	const arr = [20, 21, 22];
	console.log('元の配列');
	console.log('  ', arr);

	// 末尾に追加してコンソールに出力
	arr.push(30, 31, 32);
	console.log('末尾に追加したあとの配列');
	console.log('  ', arr);

	// 先頭に追加してコンソールに出力
	arr.unshift(10, 11, 12);
	console.log('先頭に追加したあとの配列');
	console.log('  ', arr);

	// 末尾の要素を取りのぞいてコンソールに出力
	const tail = arr.pop();
	console.log('末尾を取りのぞいたあとの値と配列');
	console.log('  ', tail);
	console.log('  ', arr);

	// 先頭の要素を取りのぞいてコンソールに出力
	const head = arr.shift();
	console.log('先頭を取りのぞいたあとの値と配列');
	console.log('  ', head);
	console.log('  ', arr);

