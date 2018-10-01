var http = require('http');
var dt = require('./myfirstmodule');
var ae = require('../after-effects');

// THIS IS A FUNCTION DEFINITION, but the value is only available to node.js (?)
var myposition = ae(() => {
    return app.project.item(1).layer(1).property("Position").value;
});
console.log(myposition); // alerts to local console, not AE

// THIS IS A FUNCTION DEFINITION ALSO
var foo = () => app.project.item(1).layer(1).duplicate();

ae(foo); // SENDS AND RUNS FUNCTION foo IN AE

// THIS IS A FUNCTION DEFINITION, MULTIPLE LINES, AND IT WORKS!
var settext = () => {app.project.item(1).layer(1).duplicate();
const hipp = app.project.item(1).layer(1);
const hopp = app.project.item(1).layer(2);



// Here is a keyframing the source text property (although it's different from the Scripting guide)
var text1Prop = hopp.property("Source Text");
text1Prop.setValueAtTime(0, new TextDocument("Happy"));
text1Prop.setValueAtTime(.5, new TextDocument("cake"));
text1Prop.setValueAtTime(1, new TextDocument("is"));
text1Prop.setValueAtTime(1.5, new TextDocument("yummy!"));



// Here is a whole text manipulation thing from the AE Scripting Guide "Text Document Object" section
var textProp = hipp.property("Source Text");
var textDocument = textProp.value;
myString = "Happy holidays!";
textDocument.resetCharStyle();
textDocument.fontSize = 60;
textDocument.fillColor = [1, 0, 0];
textDocument.strokeColor = [0, 1, 0];
textDocument.strokeWidth = 2;
textDocument.font = "GCFrankBold";
textDocument.strokeOverFill = true;
textDocument.applyStroke = true;
textDocument.applyFill = true;
textDocument.text = myString.toUpperCase();
textDocument.justification = ParagraphJustification.CENTER_JUSTIFY;
textDocument.tracking = 50;
textProp.setValue(textDocument);


var myposition = app.project.item(1).layer(1).property("Position").value;
app.project.item(1).layer(1).property("Position").setValue([myposition[0], myposition[1] + 200]);
app.project.item(1).layer("sdfaf").property("Transform").property("Position").setValue([myposition[0], myposition[1] + 100]); // "Transform" is optional
};

ae(settext); // SENDS AND RUNS FUNCTION settext IN AE

// RUNS COMMAND IN DIRECTLY IN AE 
ae(() => app.project.item(1).layer(3).property("Source Text").setValue("nonsense words here"));


// console.log(myposition[0]);

// ae((myposition)=>   app.project.item(1).layer(1).property("Transform").property("Position").setValue([myposition[0], myposition[1]+300]));



// ae(() => alert("Hello!\nFrom node.js"));

/* http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url);
    res.end();
}).listen(8080);
*/