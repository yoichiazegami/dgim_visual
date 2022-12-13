

function bubbleSort(speed) {
	for (let s = 0; s < speed; s++) {
		if (subArr < NUMS_LEN) {
		if (index >= NUMS_LEN-subArr) {
			index = 0;
			subArr++;
		}
		if (nums[index] > nums[index + 1]) {
			swap(index, index + 1);
		}
		arrayAccesses+=2;
		index++;
	}
	if (subArr >= NUMS_LEN-1) {
		numsSorted = true;
	}
	}
}
function circleSort(speed) {
	numsSorted=subArr2>200000000;
	let sp = speed*0.02*sqrt(subArr);
	if (subArr2>40) {
		sp*=4;
	}
	for (let s = 0; s < sp; s++) {
		//if (subArr < NUMS_LEN) {
		if (index > (NUMS_LEN/(subArr*2))) {
			index = 0;
			index2+=NUMS_LEN/subArr;
		}
		if(index*2+index2>=NUMS_LEN) {
				index = 0;
				index2=0;
				subArr*=2;
		}
		if (nums[index+index2] > nums[(NUMS_LEN/subArr-index)+index2]) {
			swap(index+index2, (NUMS_LEN/subArr-index)+index2);
		}
		arrayAccesses+=2;
		index++;
	//}
	if (subArr >NUMS_LEN/subArr2*2) {
		subArr=subArr2<10?1:
		(subArr2<70?NUMS_LEN*0.5:NUMS_LEN);
		subArr2*=2;
	}
	}
}

function combSort(speed) {
	for (let s = 0; s < speed; s+=6) {
		if (index2 >= NUMS_LEN) {
			index = 0;
			index2 = subArr;
			subArr=max(1, floor(subArr/1.3));
			if (!check0&&subArr===1) {
				numsSorted=true;
			}
			check0 = false;
		}
		// Swap if in incorrect order
		if (nums[index] > nums[index2]) {swap(index, index2);check0=true}
		
		index++;
		index2++;
	}
}

function oddEvenSort(speed) {
	for (let s = 0; s < speed; s++) {
		if (index >= NUMS_LEN) {
			index = int(check0);
			//if (check0) index+=subArr;
			subArr++;
			check0=!check0;
		}
		if (nums[index] > nums[index + 1]) {
			swap(index, index + 1);
		}
		arrayAccesses+=2;
		index+=2;
	}
	numsSorted = subArr>=NUMS_LEN-1
}

function insertionSort(speed) {
	for (let s = 0; s < speed; s++) {
		if (index >= 0 && nums[index+1] < nums[index]) {
			swap(index+1, index);
			index--;
		} else {
			index = subArr;
			if (subArr < NUMS_LEN-1) {
				subArr++;
			}
		}
		arrayAccesses+=2;
	}
	numsSorted=subArr>NUMS_LEN-2;
}

function shellSort(speed) {
	for (let s = 0; s < speed; s+=10) {
		if (subArr>NUMS_LEN) {
			index2--;
			numsSorted = index2 < 0;
			subArr=0;
		} else {
			if (index > 0 && nums[index-shellSortGaps[index2]] > nums[index]) {
				swap(index-shellSortGaps[index2], index);
				index-=shellSortGaps[index2];
			} else {
				index = subArr;
				if (subArr <= NUMS_LEN) {
					subArr++;
				}
			}
			arrayAccesses+=2;
		}
	}
}


function cocktailShakerSort(speed) {
	for (let s = 0; s < speed; s++) {
		if (subArr < NUMS_LEN) {
		if ((index > subArr && check0) || (index < index2 && !check0)) {
			if (check0) subArr--;
			else index2++;
			check0 = !check0;
		}
		if (check0) {
			if (nums[index] > nums[index + 1]) {
				swap(index, index + 1);
			}
			index++;
		} else {
			if (nums[index] < nums[index - 1]) {
				swap(index, index - 1);
			}
			index--;
		}
		arrayAccesses+=2;
	}
		numsSorted=subArr-index2<2;
	}
}

function selectionSort(speed) {
	if (subArr<NUMS_LEN) {
		for (let s = 0; s < speed*2; s++) {
			if (index>=NUMS_LEN) {
				swap(subArr-1, temp);
				subArr++;
				index=subArr-1;
				temp = index;
				numsSorted = subArr > NUMS_LEN-1;
			}
			if (nums[index]<nums[temp]) temp=index;
			index++
		}
	}
}

function gnomeSort(speed) {
	for (let s = 0; s < speed; s++) {
    if (index === 0 || nums[index] >= nums[index-1]) {
			index++;
		} else {
    	swap(index, index-1)
    	index--;
		}
	}
	numsSorted=index>=NUMS_LEN-2;
}





