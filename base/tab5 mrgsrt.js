var getMergeSize = () => c.length===0 ? 2 : c[c.length-1]==c[c.length-2]?c[c.length-1]*2:2;

function mergeSort(speed) {
	if (c.some(x=>x[1]>=NUMS_LEN)) {
		numsSorted=true;
		return;
	}
		
	for (let s = 0; s < speed*0.02; s++) {
		if (c.length>1&&c[c.length-1][1]===c[c.length-2][1]) {
			// merge
			if (!check0) {
				index= c[c.length-2][0];
				d=[];
				for (let i=index;i<index+c[c.length-2][1]*2;i++) {
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
				index=c[c.length-1][1]+c[c.length-1][0];
				if ((c[c.length-2][1])%2!=0) {
					throw new Error((c[c.length-2][1]))
				}
				//index--;
				let temp = c.slice()[c.length-2].slice();
				c.pop();
				c.pop();
				c.push([temp[0],temp[1]*2]);
				
		if (c.length>1&&c[c.length-1][1]===c[c.length-2][1]) {
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
			
		}
	}
}