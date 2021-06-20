

(function(){
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];


for (
  var firstLetter = names[i].charAt(0).toLowerCase();
  
  if (/* fill in condition here */ firstLetter == 'j') {
    // byeSpeaker.xxxx
    byeSpeaker.speak(names[i]);
  } else {
    // helloSpeaker.xxxx
    helloSpeaker.speak(names[i]);
  }
}
})();

