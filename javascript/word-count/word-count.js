

var words = function(string) {
  // get a string
  // turn the string into an array
  // create an empty hash
  // iterate through array for each word check if hash includes the word if yes do nothing
  // if not count the instances of the word in the aray and create a key value pair
  // output the hash

  var words_array = string.split(" ");

  var word_count_hash = {};

  words_array.map( function (word) { if (word in word_count_hash) word_count_hash[word] ++;
    else word_count_hash[word] = 1;});

    return word_count_hash;
}

module.exports = words;
