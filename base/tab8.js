
function bestMerge(arr) {
	if (!arr.some(x=>x[1]!=2)) {
		if (arr.includes([NUMS_LEN-2,2])) {
			return [[0,2],[2,2]]
		} else {
			return -1;
		}
	} else {
		let temp = arr.slice();
		temp.sort((a,b)=>a[1]-b[1]);
		return [temp[0],temp[1]];
	}
}
function bottomUpMergeSort(speed) {
	if (c.some(x=>x[1]>=NUMS_LEN)) {
		numsSorted=true;
		return;
	}
		
	for (let s = 0; s < speed*0.02; s++) {
		let mg = bestMerge(c);
		if (c.length>1&&mg!=-1) {
			// merge
			if (!check0) {
				index= mg[0][0];
				d=[];
				for (let i=index;i<index+mg[0][1]*2;i++) {
					d.push(nums[i]);
				}
				check0=true;
				d.sort((a,b)=>a-b);
			}
			nums[index] = d[0];
			index++;
			d.shift();
			//index2=min(index2,c[c.length-1][0]+c[c.length-1][1]);
			if (d.length<=0) {
				d=[];
				index=mg[1][1]+mg[1][0];
				if ((mg[0][1])%2!=0) {
					throw new Error((mg[0][1]))
				}
				//index--;
				let temp = mg[0].slice();
				c.pop();
				c.pop();
				c.push([temp[0],temp[1]*2]);
				
		if (c.length>1&&mg[1][1]===mg[0][1]) {
			check0=false;
		}
			}
		} else {
			check0=false;
			if (nums[index]>nums[index+1]) {
				swap(index,index+1);
			}
			c.push([index,2])
			index+=2;
			index%=NUMS_LEN;
		}
	}
}