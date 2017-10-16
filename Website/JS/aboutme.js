function isEven(num){
	if(num % 2 === 0){
		return (true);
	} else {
		return (false);
	}
}

function factorial (n){
	var result = 1;
	for(var i = 1; i<=n; i++){
		result = result*i
	}
}

function kebabToSnake (str) {
	str.replace(/-/g, "_");
}