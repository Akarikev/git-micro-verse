function beautifulDays(i, j, k) {
    let count = 0;
    for (let a = i, a <= j; a++) {
        if (dayBeautiful(a, k)) {
            count++;
        }
    }
    return count;
}

function differenceNum(a) {
    let num = a.toString().split('').reverse().join('');
    return Math.abs(a - num);
}

function dayBeautiful(a, k) {
    return differenceNum(a) % k === 0;
}