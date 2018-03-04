function drawTree(treeHeight) {
	for (var i = 0 ; i < treeHeight ; i++) {
		var star = '';

		for (var j = 0 ; j <= i ; j++) {
			star += '*';
		}

		console.log(star);
	}
}

console.log(drawTree(1));

console.log(drawTree(5));

console.log(drawTree(10));