const NUMS_LEN_SIZE = 10//Math.max(Math.min(Math.floor(prompt("Enter a number between 5 and 11 for the list size")), 11), 5);
const NUMS_LEN = 2**NUMS_LEN_SIZE;
const GAP_SIZE = 300/NUMS_LEN;
const shellSortGaps = [1, 4, 10, 23, 57, 132, 301, 701, 1750].filter(x=>x<NUMS_LEN);
var mode = 0;
var nums;
var d=[],g=[];
var index = 0, index2 = 0, index3 = 0, pos = NUMS_LEN_SIZE-1;
var subArr = 1, subArr2 = 1,msize=2;
var temp = 0, temp2 = 0;
var check0 = true, check = true, check2=true, check3 = true;
var swaps = 0;
let resetButton, colorButton, bSort, csSort, iSort, gSort, slSort, oeSort, cSort, sSort, displayButton, resetMode;
var currSort;
var isColor = false;
let speedSlider;
var arrayAccesses = 0;
var numsSorted = false;
var c = []
var q=[];
for (let i=0;i<NUMS_LEN;i++) {
	q.push(false);
}
var pivot;
var sWeight;
let synth, played;
const getChildren = (id) => [(id+1)*2-1, (id+1)*2];
const getParent = (id) => floor((id+1)/2) - 1;

function reset() {
	nums=[];
	switch (resetMode.value()) {
		case "Sorted":
			for (let i=0;i<height;i+=height/NUMS_LEN) {
				nums.push(i);
			}
			break;
		case "Shuffle":
			for (let i=0;i<height;i+=height/NUMS_LEN) {
				nums.push(i);
			}
			shuffle(nums, true);
			break;
		case "Reverse":
			for (let i=0;i<windowHeight;i+=windowHeight/NUMS_LEN) {
				nums.push(height-i);
			}
			break;
		// case "Slight Shuffle":
		// 	for (let i=0;i<windowHeight;i+=windowHeight/NUMS_LEN) {
		// 		nums.push(i);
		// 	}
		// 	for (let i=0;i<NUMS_LEN*2;i++) {
		// 		let n = floor(random(NUMS_LEN));
		// 		swap(n-round(random(0, max(round(NUMS_LEN*0.005), 1))), n+round(random(0, max(round(NUMS_LEN*0.005), 1))));
		// 	}
		// 	break;
		// case "Almost Sorted":
		// 	for (let i=0;i<windowHeight;i+=windowHeight/NUMS_LEN) {
		// 		nums.push(i);
		// 	}
		// 	for (let i=0;i<NUMS_LEN;i+=20) {
		// 		swap(floor(random(NUMS_LEN)), floor(random(NUMS_LEN)));
		// 	}
		// 	break;
		case "Random":
			for (let i=0;i<height;i+=height/NUMS_LEN) {
				nums.push(random(0,height));
			}
			break;
		// case "Sine Wave":
		// 	for (let i=0;i<height;i+=height/NUMS_LEN) {
		// 		nums.push(0.5*(
		// 			height+height*sin( map(i,0,height,0,TAU) )
		// 		)+random(0.01));
		// 	}
		// 	break;
		// case "Parabola":
		// 	for (let i=-1;i<1;i+=2/NUMS_LEN) {
		// 		nums.push(map(i**2,0,1,0,height)+random(0.01));
		// 	}
		// 	break;
		// case "Shuffled Sine Wave":
		// 	for (let i=0;i<height;i+=height/NUMS_LEN) {
		// 		nums.push(0.5*(
		// 			height+height*sin( map(i,0,height,0,TAU) )
		// 		)+random(0.01));
		// 	}
		// 	shuffle(nums,true);
		// 	break;
		// case "Higher Frequency Sine Wave":
		// 	for (let i=0;i<height;i+=height/NUMS_LEN) {
		// 		nums.push(0.5*(
		// 			height+height*sin( map(i,0,height,0,4*TAU) )
		// 		)+random(0.01));
		// 	}
		// 	break;
		case "Many Similar":
			for (let i=0;i<height;i+=height/NUMS_LEN) {
				nums.push(random(0.01)+random([height/8,height/4,3*height/8,height/2,5*height/8,3*height/4,7*height/8]));
			}
			break;
	}
	index = 0;
	index2 = 0;
	index3 = 0;
	subArr = 1;
	subArr2 = 1;
	temp = 0;
	temp2 = 0;
	pos = 0;
	c=[];
	d=[];
	q=[];
	g=[];
	for (let i=0;i<NUMS_LEN;i++) {
		q.push(false);
	}
	check0 = true;
	check = true;
	check2 = true;
	check3 = true;
	swaps = 0;
	arrayAccesses = 0;
	numsSorted = false;
}


//------//
