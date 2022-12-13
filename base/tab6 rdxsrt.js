const dec2bin = (dec) => (dec >>> 0).toString(2);
const getDigitInBase = (x, digit, base) => (x).toString(base).charAt((x).toString(base).length - digit-1);
//const getDigitInBase = (x, digit, base) => floor((x % pow(base, digit + 1)) / pow(base, digit));
const getBinaryDigit = (x, digit) => dec2bin(x).charAt(dec2bin(x).length - digit - 1)

function binaryLSDRadixSortInPlace(speed) {
	if (check0) {
		subArr = NUMS_LEN - 1;
		check0 = false;
	}
	for (let s = 0; s < speed; s++) {
		if (index >= subArr - 1) {
			index = 0;
			subArr = NUMS_LEN - 1;
			pos++;
		}
		if (getBinaryDigit(floor(nums[index] / height * NUMS_LEN), pos) === "0") {
			index++;
		} else {
			swap(index, subArr);
			subArr--;
		}
	}
}

function binaryRadixLSDSort(speed) {
	if (check0) {
		c = [
			[],
			[],
			[],
			[],
			[],
			[],
		];
		check0 = false;
	}
	numsSorted = pos > NUMS_LEN_SIZE;
	for (let s = 0; s < speed; s += 50) {
		if (index >= NUMS_LEN) {
			index = 0;
			q = (c[0].slice()).concat(c[1].slice());
			check2 = false;
			c = [
				[],
				[],
				[],
				[],
				[],
				[],
			];
			pos++;
		}
		if (!check2) nums[index] = q[index];
		if (getBinaryDigit(nums[index] / height * NUMS_LEN, pos) == 0) {
			c[0].push(nums[index]);
		} else {
			c[1].push(nums[index]);
		}
		index++;
	}
}

function binaryRadixMSDSort(speed) {
	/*print(c.length+" "+d.length+" "+q.length+" "+g.length+" "+pos)
	if (frameCount%40==0) {
		print(d.length/(2**pos));
	}*/
	if (numsSorted) insertionSort();
	if (check0) {
		c = [
			[],
			[]
		];
		d=[];
		pos = NUMS_LEN_SIZE-1;
		check0 = false;
	}
	//print(floor(index/(2**(pos+1))));
	numsSorted = pos < -1;
	for (let s = 0; s < speed; s += 50) {
		if (index >= NUMS_LEN) {
			index = 0;
			q = [];
			for (let a of c) {
				q = q.concat(a.slice());
			}
			check2 = false;
			d=JSON.parse(JSON.stringify(c.slice()))
			c = [
			];
			pos--;
			for (let i=0;i<(2**(NUMS_LEN_SIZE-pos));i++) {
				c.push([]);
			}
			g = [];
			for (let i in d.slice()) {
				if ((i+1)*2<=i/(2**(pos+1))) {
					break;
				}
				g = g.concat(d[i].slice());
			}
		}
		if (!check2) nums[index] = q[
			index/*%(
				NUMS_LEN/(
					2**(NUMS_LEN_SIZE-pos-1)
				)
			)*/
		];
		try {
		if (getBinaryDigit(floor(nums[index]/height * NUMS_LEN), pos) == 0&&(d.length==0||g.includes(nums[index]))) {
			c[floor(index/(2**(pos+1)))].push(nums[index]);
		} else {
			c[floor(index/(2**(pos+1)))+1].push(nums[index]);
		}
		} catch (e) {
			print(floor(index/(2**(pos+1)))+" "+c.length+" "+e.message+" "+e.line);
			throw new Error();
		}
		index++;
	}
}