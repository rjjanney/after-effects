function pairElement(str) {
    let dna = {
        A: ["A", "T"],
        T: ["T", "A"],
        C: ["C", "G"],
        G: ["G", "C"]
    }
    let output = [];
    for (let letter in str) {
        output.push(dna[str[letter]]);
    }
    console.log(output);
    return output;
}

pairElement("ATCGA")// should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
pairElement("TTGAG")// should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]
pairElement("CTCTA")// should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]