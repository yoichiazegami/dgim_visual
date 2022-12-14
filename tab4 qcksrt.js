// noprotect

function getUnsortedIndices(arr) {
	let f = false,
		indices = [];
	for (let m in arr) {
		if (!f && !arr[m]) {
			indices.push(int(m)-1==1?0:max(int(m)-1, 0));
			f = true;
		} else if (f && arr[m]) {
			indices.push(int(m) - 1);
			return indices.slice();
		}
	}
	if (indices.length == 1) return indices.concat(NUMS_LEN - 1);
}

function quickSort(speed) {
	for (let s = 0; s < speed*0.1; s++) {
		if (numsSorted) {
			for (let i = 0; i < NUMS_LEN; i++) {
				if (nums[i] > nums[i + 1]) swap(i, i + 1);
			}
		} else {
			if (index > subArr) {
				swap(index, c[1]); // Put pivot in correct position
				q[index] = true; // Mark pivot as sorted
				c = getUnsortedIndices(q);
				if (c == undefined) {
					numsSorted = true;
					return;
				}
				while (c[1] == c[0]) {
					q[c[0]] = true; // If there's only one index to sort, mark as sorted
					c = getUnsortedIndices(q);
					
				if (c == undefined) {
					numsSorted = true;
					return;
				}
				}
				index = c[0];
				subArr = c[1] - 1;
				// if (c[1]-c[0]>1) swap(round((c[0]+c[1])/2), c[1]);
				index2 = nums[c[1]];
			}
			if (nums[index] <= index2) {
				index++;
			} else {
				swap(index, subArr);
				subArr--;
			}
		}
	}
}