function heapSort(speed) {
	for (let s=0;s<speed*0.05;s++){
	if (check0) {
		index=index2;
		c = getChildren(index);
		while(nums[c[0]]>=nums[index]||nums[c[1]]>=nums[index]) {
			if (nums[c[0]]>=nums[c[1]]) {
				swap(index, c[0]);
				index = c[0];
			} else {
				swap(index, c[1]);
				index = c[1];
			}
			c = getChildren(index);
		}
		index2--;
		if (index2==0) {check0=false;return;}
	} else {
		if (!(nums[c]>=nums[index]&&c<subArr)) {
			swap(0, subArr+1);
			index=0;
			c = nums.indexOf(max(nums[getChildren(index)[0]], nums[getChildren(index)[1]]));
		}
		swap(index, c);
		index = c;
		c = nums.indexOf(max(nums[getChildren(index)[0]], nums[getChildren(index)[1]]));
		if (!(nums[c]>=nums[index]&&c<subArr)) {
			subArr--;
			if (subArr<1) {
				numsSorted = true;
				for(let i=0;i<NUMS_LEN;i++) {
					if (nums[i] >= nums[i+1]) swap(i, i+1);
				}
			}
		}
	}
	}
}