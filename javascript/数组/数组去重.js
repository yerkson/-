function unique(a) {
    var res = [];
    for (var i = 0, len = a.length; i < len; i++) {
        var item = a[i];
        for (var j = 0, jLen = res.length; j < jLen; j++) {
            if (res[j] === item)
                break;
        }
        if (j === jLen)
            res.push(item);
    }
    return res;
}

var a = [1, 1, '1', '2', 1];
var ans = unique(a);
console.log(ans); // => [1, "1", "2"]


//// 去除重复元素依靠的是indexOf总是返回第一个元素的位置，
// 后续的重复元素位置与indexOf返回的位置不相等，因此被filter滤掉了。
function unique(a) {
    var res = a.filter(function(item, index, array) {
        return array.indexOf(item) === index;
    });
    return res;
}

//将两个数组拼接为一个数组
function distinct(a, b) {
    let arr = a.concat(b);
    return arr.filter((item, index,array)=> {
        return array.indexOf(item) === index
    })
}

//效率最低
function distinct(a, b) {
    let arr = a.concat(b);
    for (let i=0, len=arr.length; i<len; i++) {
        for (let j=i+1; j<len; j++) {
            if (arr[i] == arr[j]) {
                arr.splice(j, 1);
                // splice 会改变数组长度，所以要将数组长度 len 和下标 j 减一
                len--;
                j--;
            }
        }
    }
    return arr
}

function distinct(a, b) {
    return Array.from(new Set([...a, ...b]))
}

//首先使用 sort() 将数组进行排序
//然后比较相邻元素是否相等，从而排除重复项
function distinct(a, b) {
    let arr = a.concat(b)
    arr = arr.sort()
    let result = [arr[0]]
    for (let i=1, len=arr.length; i<len; i++) {
        arr[i] !== arr[i-1] && result.push(arr[i])
    }
    return result
}



