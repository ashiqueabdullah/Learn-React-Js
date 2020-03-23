function vara(){
	for (var i = 0; i <10; i++) {
		console.log("Loop er vitore vaire shob jaigai kaj korbe");
	}
}
function lett(){
	for(let i=1; i<4; i++){
		console.log("just loop er vitore kaj korbe");
	}
}

function constet(){
	for(const i=1; i<4; i++){
		console.log("valu 1st ja deya hoi tai thakbe r chnage hobe nah");
	}
}

var a= function add(){
	console.log(20);
} 

console.log(a());

//arrow function (f) eita premature {return f*f*f}; functionility 
var arrowfun= (f)=>{return f*f*f};
console.log(arrowfun(3));