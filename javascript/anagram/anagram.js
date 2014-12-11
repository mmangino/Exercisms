module.exports = function(word){
  return {
    matches: function(input){

          if (input.constructor == Array){
            var possible_matches = input
          } else {
            var possible_matches = Array.prototype.slice.call(arguments)
          }

        var base = order_letters(word.toLowerCase())

        function matched(element){if (order_letters(element.toLowerCase()) == base && element.toLowerCase() !== word.toLowerCase()){
                                  return element}}

        var matches = possible_matches.filter(matched)

        return matches


    }
  };
};


  function order_letters(word){
    word_as_array = word.split("");
    ordered_letters = word_as_array.sort();
    ordered_string = ordered_letters.join("")
    return ordered_string
  }
