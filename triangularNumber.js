// Return the nth triangular number
function triangular( n ) {
	if(n <= 0){
		return 0;
	}else {
	n = (n * (n + 1)) / 2;
	return n;
	}
}
