function drawTree(treeHeight) {
	for (var i = 0 ; i < treeHeight ; i++) {
		var star = '';

		for (var j = 0 ; j <= i ; j++) {
			star += '*';
		}

		console.log(star);
	}
}

drawTree(3);

drawTree(5);

drawTree(10);


//=================================

console.log('Dla ambitnych:');

function drawBigTree(h) {
	for (var i = 0 ; i <= h ; i++) {
		var star = '';

		for (var s = h - i ; s > 0 ; s--) {
			star += ' ';
		}

		for (var g = 0 ; g < i ; g++) {
			if (g == 0) {
				star += '*';
			} else {
				star += '**';
			}
		}

		console.log(star);
	}
}

drawBigTree(3);

drawBigTree(5);

drawBigTree(10);