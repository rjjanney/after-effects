function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
    console.log(str.trim().toLowerCase().split(/\W+/).join('-'));
    console.log(str.trim().replace(/([a-z])([A-Z])/g, '$1 $2').split(/\W|_+/).join('-').toLowerCase());
}

spinalCase('This Is Spinal Tap');

spinalCase("Teletubbies say Eh-oh")
spinalCase("The_Andy_Griffith_Show")
spinalCase("AllThe-small Things")
spinalCase("thisIsSpinalTap")