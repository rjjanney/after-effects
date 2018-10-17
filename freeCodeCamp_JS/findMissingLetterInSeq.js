function fearNotLetter(str) {
    let n = str.charCodeAt(0);
    for (let x in str) {
        if (n != str.charCodeAt(x)) {
            return String.fromCharCode(n);
        } 
        n++
    } 
}

console.log(fearNotLetter("abce"));