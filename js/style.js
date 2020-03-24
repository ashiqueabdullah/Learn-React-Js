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

var gun=(m,n)=>{return m*n};
console.log(gun(5,5));


///this keyword and object 
const mango={
	color:'green',
	price:100,
	mesurement:"kg",
	about:function(){
		return console.log(1+" "+this.mesurement+this.color+" color mango is"+this.price+" Tk");
		//using backcode
		return console.log(`1 ${this.mesurement} ${this.color} mango is ${this.price}`);

	}
}

console.log(mango.about());


//call object satatic
class test{
	constructor(name){
		this.name=name;
	}

	printt(){
		console.log(this.name+" is so testy");
	}

	static pri(){
		console.log("Object create nah kobe ei function call kora jabe");
	}
}


var obj=new test("Mango");
obj.printt();
test.pri();