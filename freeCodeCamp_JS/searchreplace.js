function myReplace(str, before, after) {
    if ( before.match(/^[A-Z]/) ) {
        var something = str.replace(before, after.replace(/^[a-z]/, after[0].toUpperCase()) );
    }else{
        var something = str.replace(before, after);
    }
    console.log(something);
    return something;
}
 
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("He is Sleeping on the couch", "Sleeping", "sitting")