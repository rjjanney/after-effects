function convertHTML(str) {
  // &colon;&rpar;
    let codetable = {
    '<':'&lt;',
    '>':'&gt;',
    '&':'&amp;',
    '"':'&quot;',
    '\'':'&apos;'
    };

    let arr = str.split('');
    arr.forEach((element,index) => {;
        if (codetable.hasOwnProperty(element)) {
            console.log(arr[index], codetable[element]);
            arr[index] = codetable[element];
        };
       
    });
    console.log(arr.join(''));
    return arr.join();
}

// return str.split('').map(entity => codetable[entity] || entity).join('');


convertHTML("Dolce & Gabbana");
convertHTML("Hamburgers < Pizza < Tacos")
