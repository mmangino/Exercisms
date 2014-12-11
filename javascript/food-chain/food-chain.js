module.exports = {


    verse: function(verse){

      var middle_lines = []

      var base = "I know an old lady who swallowed a " + animals[verse-1] + ".\n" + phrases[verse-1]

      var ending = phrases[0]

      if (verse == 1){
      var first_verse = true
      }

      if (verse == animals.length){
      var last_verse = true
      }

      var middle = function(){
        return middle_lines.join("")
      }

      var verse2_addition = function(){
          return " that wriggled and jiggled and tickled inside her.\n"
      }

      var base_line = function(i){
        return "She swallowed the "+animals[i]+" to catch the "+animals[i-1]
      }

      if (first_verse || last_verse){
        return base

      } else {
        for (var i=1; i < verse; i++) {
          if (i == 2){
            middle_lines.unshift(base_line(i) + verse2_addition())

          } else {
            middle_lines.unshift(base_line(i) +".\n")
          }
        }
         return base + middle() + ending
       }
    },

    verses: function(first,last) {
      var complete_song = ""

      for (var i=first; i <= last; i++){
      complete_song += ""+module.exports.verse(i)+"\n";
      }

      return complete_song
    }
}

  var phrases = [
      "I don't know why she swallowed the fly. Perhaps she'll die.\n",
      "It wriggled and jiggled and tickled inside her.\n",
      "How absurd to swallow a bird!\n",
      "Imagine that, to swallow a cat!\n",
      "What a hog, to swallow a dog!\n",
      "Just opened her throat and swallowed a goat!\n",
      "I don't know how she swallowed a cow!\n",
      "She's dead, of course!\n"
      ]

  var animals = ["fly","spider", "bird", "cat", "dog", "goat", "cow", "horse"]
