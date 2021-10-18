'use strict';

// 1. countWords
function countWords(phrase) {
  const word_counts = {}
  for (const word of phrase.split(" ")) {
    if (word_counts.hasOwnProperty(word)) {
      word_counts[word] += 1;
    }
    else {
      word_counts[word] = 1;
    }
  }
  return word_counts;
}

// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  const melon_prices = {
    2.50: ['Cantaloupe', 'Honeydew'],
    2.95: ['Watermelon'],
    3.25: ['Musk', 'Crenshaw'],
    14.25: ['Christmas']
  }

  if (melon_prices.hasOwnProperty(price)) {
    return melon_prices[price].sort();
  }
  else {
    return;
  }

  // for (const melon_price in melon_prices) {
  //   if (melon_price != price) {
      
  //   }
  // }
}


const phrase = "Hello Hello everyone hello";
console.log(countWords(phrase));
console.log(getMelonsAtPrice(2.50))
console.log(getMelonsAtPrice(3.25))
console.log(getMelonsAtPrice(3.00))