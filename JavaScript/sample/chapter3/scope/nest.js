
	let test = true;
	if (test) {
		let food = 'ケーキ';
		console.log('階層1 :', food);

		if (test) {
			let food = 'パン';
			console.log('  階層2 :', food);

			if (test) {
				console.log('    階層3 :', food);
			}
			
			console.log('  階層2 :', food);
		}

		console.log('階層1 :', food);
	}
