// @see hosting?
	let test = true;
	if (test) {
		let food = 'ケーキ';
		console.log('階層1 :' + food);

		if (test) {
			console.log('  階層2 :' + food);
			let food = 'パン';
		}
	}

