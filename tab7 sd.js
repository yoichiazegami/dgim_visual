


function setup() {
	p5.disableFriendlyErrors = true;
	resetMode = createSelect();
	resetMode.position(135, 285);
	resetMode.option("Shuffle");
	resetMode.option("Reverse");
	//resetMode.option("Slight Shuffle");
	//resetMode.option("Almost Sorted");
	//resetMode.option("Sorted");
	resetMode.option("Random");
	//resetMode.option("Sine Wave");
	//resetMode.option("Shuffled Sine Wave");
	//resetMode.option("Higher Frequency Sine Wave");
	resetMode.option("Many Similar");
	//resetMode.option("Parabola");
  resetMode.selected("Shuffle");
	currSort = random([
		bubbleSort, insertionSort,
		function(){index2=1;subArr=NUMS_LEN-1;currSort = cocktailShakerSort;},
		gnomeSort, selectionSort, oddEvenSort, binaryRadixLSDSort, binaryRadixMSDSort,
		mergeSort,circleSort,
		function(){subArr=NUMS_LEN;index2=subArr;currSort = combSort;},
		function(){index2=shellSortGaps.length-1;currSort = shellSort;},
		function(){index2=NUMS_LEN/2; subArr=NUMS_LEN-1; currSort = heapSort},
		function(){c=getUnsortedIndices(q);index2=nums[c[1]];currSort=quickSort;},
	]);
	createCanvas(1000, 1000);
	colorMode(HSB);
	reset();
	//userStartAudio();
	synth = new p5.MonoSynth();
  bSort = createButton('Bubble Sort');
  bSort.position(25, 75);
  bSort.size(100, 30);
  bSort.mousePressed(function(){reset(); currSort = bubbleSort;});
  iSort = createButton('Insertion Sort');
  iSort.position(150, 75);
  iSort.size(100, 30);
  iSort.mousePressed(function(){reset(); currSort = insertionSort;});
  csSort = createButton('Cocktail Shaker Sort');
  csSort.position(275, 75);
  csSort.size(150, 30);
  csSort.mousePressed(function(){reset(); index2=1;subArr=NUMS_LEN-1;currSort = cocktailShakerSort;});
  gSort = createButton('Gnome Sort');
  gSort.position(450, 75);
  gSort.size(100, 30);
  gSort.mousePressed(function(){reset(); currSort = gnomeSort;});
  slSort = createButton('Selection Sort');
  slSort.position(575, 75);
  slSort.size(100, 30);
  slSort.mousePressed(function(){reset(); currSort = selectionSort;});
  oeSort = createButton('Odd-Even Sort');
  oeSort.position(700, 75);
  oeSort.size(125, 30);
  oeSort.mousePressed(function(){reset(); currSort = oddEvenSort;});
  cSort = createButton('Comb Sort');
  cSort.position(850, 75);
  cSort.size(100, 30);
  cSort.mousePressed(function(){reset(); subArr=NUMS_LEN;index2=subArr;currSort = combSort;});
  sSort = createButton('Shell Sort');
  sSort.position(975, 75);
  sSort.size(100, 30);
  sSort.mousePressed(function(){reset(); index2=shellSortGaps.length-1;currSort = shellSort;});
  hSort = createButton('Heap Sort');
  hSort.position(1100, 75);
  hSort.size(100, 30);
  hSort.mousePressed(function(){reset(); index2=NUMS_LEN/2; subArr=NUMS_LEN-1; currSort = heapSort});
  qSort = createButton('Quick Sort');
  qSort.position(25, height-75);
  qSort.size(100, 30);
  qSort.mousePressed(function(){reset(); c=getUnsortedIndices(q);index2=nums[c[1]];currSort=quickSort;});
  rl2Sort = createButton('Binary Radix LSD Sort');
  rl2Sort.position(180, height-75);
  rl2Sort.size(160, 30);
  rl2Sort.mousePressed(function(){reset();currSort=binaryRadixLSDSort;});
  rm2Sort = createButton('Binary Radix MSD Sort');
  rm2Sort.position(360, height-75);
  rm2Sort.size(160, 30);
  rm2Sort.mousePressed(function(){reset();currSort=binaryRadixMSDSort;});
  mSort = createButton('Merge Sort');
  mSort.position(530, height-75);
  mSort.size(100, 30);
  mSort.mousePressed(function(){reset();currSort=mergeSort;});
  crclSort = createButton('Circle+Pairwise Sort');
  crclSort.position(660, height-75);
  crclSort.size(160, 30);
  crclSort.mousePressed(function(){reset();currSort=circleSort;});
  // displayButton = createButton('Display Mode');
  // displayButton.position(25, 225);
  // displayButton.size(150, 30);
  // displayButton.mousePressed(function(){mode++;if(mode>=10){mode=0;}});
  // colorButton = createButton('Toggle Color');
  // colorButton.position(200, 225);
  // colorButton.size(150, 30);
  // colorButton.mousePressed(function(){isColor=!isColor});
	speedSlider = createSlider(1, NUMS_LEN*4+1, round((NUMS_LEN*NUMS_LEN)/1024)-3);
  speedSlider.position(25, 175);
  speedSlider.style('width', '300px');
	sWeight = width/NUMS_LEN-GAP_SIZE;

}

function draw() {

	if(numsSorted == true) {
		p5.disableFriendlyErrors = true;
		resetMode = createSelect();
		resetMode.position(135, 285);
		resetMode.option("Shuffle");
		resetMode.option("Reverse");
		//resetMode.option("Slight Shuffle");
		//resetMode.option("Almost Sorted");
		//resetMode.option("Sorted");
		resetMode.option("Random");
		//resetMode.option("Sine Wave");
		//resetMode.option("Shuffled Sine Wave");
		//resetMode.option("Higher Frequency Sine Wave");
		resetMode.option("Many Similar");
		//resetMode.option("Parabola");
	  resetMode.selected("Shuffle");
		currSort = random([
			bubbleSort, insertionSort,
			function(){index2=1;subArr=NUMS_LEN-1;currSort = cocktailShakerSort;},
			gnomeSort, selectionSort, oddEvenSort, binaryRadixLSDSort, binaryRadixMSDSort,
			mergeSort,circleSort,
			function(){subArr=NUMS_LEN;index2=subArr;currSort = combSort;},
			function(){index2=shellSortGaps.length-1;currSort = shellSort;},
			function(){index2=NUMS_LEN/2; subArr=NUMS_LEN-1; currSort = heapSort},
			function(){c=getUnsortedIndices(q);index2=nums[c[1]];currSort=quickSort;},
		]);
		createCanvas(1000, 1000);
		colorMode(HSB);
		reset();
}


	noSmooth();
	strokeCap(SQUARE);
	background(0);
	strokeWeight(sWeight*(mode==1||mode==3?3:1.4));
	played=false;
	stroke(255);
	switch (mode) {
		case 0:
			for (let num in nums) {
				if (isColor) stroke(lerp(0, 360, nums[num] / height), 255, 255);
				line(num * width / NUMS_LEN + sWeight/2, height - nums[num], num * width / NUMS_LEN + sWeight/2, height);
			}
			break;
		case 8:
			for (let num in nums) {
				if (isColor) stroke(lerp(0, 360, nums[num] / height), 255, 255);
				let llen = nums[num];
				line(num * width / NUMS_LEN + sWeight/2, map(llen, 0, height, height*0.5, 0), num * width / NUMS_LEN + sWeight/2, map(llen, 0, height, height*0.5, height));
			}
			break;
		case 9:
			text("bad attempt at making a sword", width*0.3,height*0.06);
			for (let num in nums) {
				if (isColor) stroke(lerp(0, 360, nums[num] / height), 255, 255);
				let place = nums[num]/height;
				let llen = place<0.0333333?nums[num]*4.5:
				place<0.2?height*0.15:
				place<0.25?height*0.8:
				place<0.8?(height-nums[num])*0.2+height*0.36:
				(height-nums[num])*2;
				line(num * width / NUMS_LEN + sWeight/2, map(llen, 0, height, height*0.5, 0), num * width / NUMS_LEN + sWeight/2, map(llen, 0, height, height*0.5, height));
			}
			break;
		case 1:
			for (let num in nums) {
				if (isColor) stroke(lerp(0, 360, nums[num] / height), 255, 255);
				line(num * width / NUMS_LEN + sWeight/2, height - nums[num], (num * width / NUMS_LEN + sWeight/2)+width/NUMS_LEN, height - nums[num]+2);
			}
			break;
		case 2:
			for (var num in nums) {
				if (isColor) stroke(lerp(0, 360, nums[num] / height), 255, 255);
				line(num * width / NUMS_LEN + sWeight/2, height - nums[num], (num * width / NUMS_LEN + sWeight/2)+width/NUMS_LEN, height - nums[int(num)+1]);
			}
			break;
		case 3:
			for (let num in nums) {
				if (isColor) stroke(lerp(0, 360, nums[num] / height), 255, 255);
				line(width/2, height/2, (width*0.3-abs(nums[num]-num/NUMS_LEN*height)/height*width*0.3)*cos(num/NUMS_LEN*TAU-HALF_PI)+width/2, (height*0.35-abs(nums[num]-num/NUMS_LEN*height)*0.35)*sin(num/NUMS_LEN*TAU-HALF_PI)+height/2);
			}
			break;
		case 4:
			for (let num in nums) {
				if (isColor) stroke(lerp(0, 360, nums[num] / height), 255, 255);
				point((width*0.3-abs(nums[num]-num/NUMS_LEN*height)*0.3)*cos(num/NUMS_LEN*TAU-HALF_PI)+width/2, (height*0.35-abs(nums[num]-num/NUMS_LEN*height)*0.35)*sin(num/NUMS_LEN*TAU-HALF_PI)+height/2);
			}
			break;/**/
		case 5:
			for (let num in nums) {
				if (isColor) stroke(lerp(0, 360, nums[num] / height), 255, 255);
				line(num * width / NUMS_LEN + sWeight/2, 0, num * width / NUMS_LEN + sWeight/2, height);
			}
			break;
		case 6:
			noFill();
			for (let num in nums) {
				if (isColor) stroke(lerp(0, 360, nums[num] / height), 255, 255);
				let disparity = (nums[num]-num/NUMS_LEN*height);
				let shift =  (disparity)*0.1;
				rect(
					num/height*width*0.3+shift*0.5,
					num*0.2+shift*0.5,
					num/height*width+shift,
					num*0.5+shift
				);
			}
			break;
		case 7:
			noStroke();
			for (let num in nums) {
				if (isColor) fill(lerp(0, 360, nums[num] / height), 255, 255);
				let x = map((num*20)%1000, 0, 1000, 50, width);
				let y = map((num-(num%50)), 0, 1000, 25, height-25);
				ellipse(x,y,10+nums[num]*0.05,10+nums[num]*0.05);
			}
			break;
	}
	noStroke();
	fill(255);
	textSize(10);
	text(nfc(swaps) + " swaps", 10, 10);
	//text(nfc(arrayAccesses) + " array accesses", 400, 50);
	//textSize(20);
	//text("Speed: " + speedSlider.value(), 100, 150);
	//text("Reset type: ", 25, 300);
	if (!numsSorted) {
		//stroke(0, isColor?0:255, 255);
		//strokeWeight(3);
		noStroke();
		if (mode!==6&&mode!==7) {
			if (currSort===combSort) {
			if (mode===3||mode===4) {line(width/2, height/2, width*0.3*cos(index/NUMS_LEN*TAU-HALF_PI)+width/2, height*0.35*sin(index/NUMS_LEN*TAU-HALF_PI)+height/2);line(width/2, height/2, width*0.3*cos(index2/NUMS_LEN*TAU-HALF_PI)+width/2, height*0.35*sin(index2/NUMS_LEN*TAU-HALF_PI)+height/2)
															} else {line(index/NUMS_LEN*width, 0, index/NUMS_LEN*width, height);line(index2/NUMS_LEN*width, 0, index2/NUMS_LEN*width, height)}
			} else if (currSort===quickSort) {

				if (mode===3||mode===4) {line(width/2, height/2, width*0.3*cos(index/NUMS_LEN*TAU-HALF_PI)+width/2, height*0.35*sin(index/NUMS_LEN*TAU-HALF_PI)+height/2);line(width/2, height/2, width*0.3*cos(subArr/NUMS_LEN*TAU-HALF_PI)+width/2, height*0.35*sin(subArr/NUMS_LEN*TAU-HALF_PI)+height/2)
															} else {line(index/NUMS_LEN*width, 0, index/NUMS_LEN*width, height);line(subArr/NUMS_LEN*width, 0, subArr/NUMS_LEN*width, height)}
			} else if (currSort===circleSort) {
				let ind = index+index2;
				if (mode===3||mode===4) line(width/2, height/2, width*0.3*cos(ind/NUMS_LEN*TAU-HALF_PI)+width/2, height*0.35*sin(ind/NUMS_LEN*TAU-HALF_PI)+height/2);
				else line(ind/NUMS_LEN*width, 0, ind/NUMS_LEN*width, height);
			} else {
				if (mode===3||mode===4) line(width/2, height/2, width*0.3*cos(index/NUMS_LEN*TAU-HALF_PI)+width/2, height*0.35*sin(index/NUMS_LEN*TAU-HALF_PI)+height/2);
				else line(index/NUMS_LEN*width, 0, index/NUMS_LEN*width, height);
			}
		} else if (mode == 6) {
			noFill();
			let disparity = (nums[index]-index/NUMS_LEN*height);
			let shift =  (disparity)*0.1;
			rect(
				index/height*width*0.3+shift*0.5,
				index*0.2+shift*0.5,
				index/height*width+shift,
				index*0.5+shift
			);
		} else if (mode ==7) {
			let x = map((index*20)%1000, 0, 1000, 50, width);
			let y = map((index-(index%50)), 0, 1000, 25, height-25);
			ellipse(x,y,10+nums[index]*0.07,10+nums[index]*0.07);
		}
		let playVal = 100*
				round((4+nums[currSort==circleSort?index+index2:
					currSort==heapSort&&!check0?c:(currSort===mergeSort||
																				 currSort===binaryRadixLSDSort||
																				 currSort===binaryRadixMSDSort?index-1:index)
				])*0.04);
		synth.play(playVal, 1, 0, 0.01);
	}
	currSort(speedSlider.value());
}

function swap(index1, index2) {
	index1=constrain(int(index1), 0, NUMS_LEN-1);
	index2=constrain(int(index2), 0, NUMS_LEN-1);
	let temp = nums[index1];
	nums[index1] = nums[index2];
	nums[index2] = temp;
	if (!numsSorted) swaps++;
	arrayAccesses += 4;
}

function sorted() {
	let numslength = nums.length;
	for (let i = 0; i < numslength; i++) {
		arrayAccesses+=2;
		if (nums[i] > nums[i + 1]) return false;
	}
	return true;
}

//
