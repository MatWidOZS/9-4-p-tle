function drawTree(treeHeight) {
	for (var i = 0 ; i < treeHeight ; i++) {
		var star = '';

		for (var j = 0 ; j <= i ; j++) {
			star += '*';
		}

		console.log(star);
	}
}

drawTree(1);

drawTree(5);

drawTree(10);