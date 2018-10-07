function translatePigLatin(str) {
  if (str.match(/^([^aeiou]+)/)) {
    console.log(str.match(/^([^aeiou]+)/)[0]);
    console.log(str.replace(/^([^aeiou]+)/, "") + str.match(/^([^aeiou]+)/)[0] + 'ay');
  }
  return str + 'way';
}

translatePigLatin("chonsonant");