function XO(str) {
    let myLower = str.toLowerCase();
    let myXcnt = 0;
    let myOcnt = 0;
    for (let i = 0; i < str.length; i++) {
        if (myLower[i] == 'x') {
            myXcnt = myXcnt + 1;
        } else if (myLower[i] == 'o') {
            myOcnt = myOcnt + 1;
        }
    }
    if (myOcnt === myXcnt) {
        return true;
    } else {
        return false;
    }
}

console.log(XO('xo')); // true
console.log(XO('xxOo')); // true
console.log(XO('xxxm')); // false
console.log(XO('Oo')); // false
console.log(XO('ooom')); // false
