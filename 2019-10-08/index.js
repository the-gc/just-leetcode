var splitIntoFibonacci = function(S) {
    let fibList = [];
    backTrack(S, fibList, [], 0);
    return fibList
}
function backTrack (str, fibList, templist, st) {
    // 已经找到符合条件的数组 直接返回
    if (fibList.length > 0) {return}
    // 遍历 str 完成 并且 templist 数组长度大于 3
    if (st == str.length && templist.length >= 3) {
        fibList.push(...templist);
        return 
    }
    let size = templist.length;
    let lng = str.length;
    
    // 从 st 起步遍历 str
    for (let i = st; i < str.length; i++) {
        // 第一位为 0
        if (str[st] == 0 && i > st) {
            break;
        }
        let num = str.slice(st, i+1);
        // 数值不大于 2^31 - 1
        if (num > 0x7fffffff) {
            break;
        }
        // 数值最长不超过总长的三分之一
        let maxlength = Math.ceil(lng / 3);
        if (num.length > maxlength) {
            break;
        }
        // 长度大于等于 2 且 数值大于前两位之和
        if (size >= 2 && num > templist[size -1] + templist[size - 2]) {
            break;
        }
        // 长度小于 2 或 数值等于前两位之和 需要继续回溯
        if (size < 2 || num == templist[size - 1] + templist[size - 2]) {
            let newList = [...templist, Number(num)]
            backTrack(str, fibList, newList, i+1);
        }
    }
}


// 有效括号的嵌套深度
var maxDepthAfterSplit = function (seq) {
    let deep = 0;
    let arr = new Array(seq.length);
    let max = 0;
    for (let i = 0; i < seq.length; i++) {
        if (seq[i] === "(") {
            deep++;
        }
        arr[i] = deep;
        max = Math.max(max, deep);
        if (seq[i] === ')') {
            deep--;
        }
    }
    let mid = max / 2;
    return arr.map(item => item > mid ? 1 : 0);
};
