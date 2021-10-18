'use strict';

// 1. printIndices
function printIndices(items) {
  for (const i in items) {
    console.log(`${items[i]} ${i}`);
  }
}

// 2. everyOtherItem
function everyOtherItem(items) {
  const result = [];

  for (const i in items) {
    if (i % 2 === 0) {
      result.push(items[i]);
    }
  }
  console.log(result);
}

// 3. smallestNItems
function smallestNItems(items, n) {
  const sortedItems = items.sort((a, b) => a - b);
  const sortedNItems = sortedItems.slice(0, n);
  smallestNItems = sortedNItems.reverse();

  console.log(smallestNItems);
}

let items = ["apple", "berry", "cherry"]
printIndices(items)
items = ["apple", "berry", "cherry","banana", "pear"]
everyOtherItem(items)
const nums = [1, 30, 4, 21, 100000,300,50];
smallestNItems(nums,5)