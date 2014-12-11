module.exports = {


    verse: function(number){

    var middle = []

      if (number == 1){
        return "I know an old lady who swallowed a " + animals[number-1] + ".\n" + phrases[0] + ""
      } else if (number == animals.length ) {
        return "I know an old lady who swallowed a " + animals[number-1] + ".\n" + phrases[phrases.length - 1] + ""
      } else {
        for (i=0; i < number-1; i++) {
          if (i == 1){
            middle.push("She swallowed the "+animals[i+1]+" to catch the "+animals[i]+" that wriggled and jiggled and tickled inside her.\n")
          } else {
          middle.push("She swallowed the "+animals[i+1]+" to catch the "+animals[i]+".\n")
          }
        }


     return "I know an old lady who swallowed a " + animals[number-1] + ".\n" + phrases[number-1] + middle.reverse().join("") + phrases[0]
   }
  }
}

  var phrases = ["I don't know why she swallowed the fly. Perhaps she'll die.\n", "It wriggled and jiggled and tickled inside her.\n",
   "How absurd to swallow a bird!\n", "Imagine that, to swallow a cat!\n", "What a hog, to swallow a dog!\n",
   "Just opened her throat and swallowed a goat!\n", "I don't know how she swallowed a cow!\n",
   "She's dead, of course!\n"
   ]

  var animals = ["fly","spider", "bird", "cat", "dog", "goat", "cow", "horse"]
