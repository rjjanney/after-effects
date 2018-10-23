
function uniteUnique(...arr) { 
    let output = [];   
    arr.forEach(i => {
        console.log(i);
        i.forEach(x => {
            if ( x in output ) {

            }else{
                output.push(x)
            }
        });
        console.log(output);
    });
    
    return output;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);