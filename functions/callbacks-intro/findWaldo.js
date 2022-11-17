// The second argument/parameter is expected to be a (callback) function
const findWaldo = (names, found) => {
  names.forEach((element, i) => {
    if (element === "Bob") {
      found(element + " at index " + i);   // execute callback
    } else {
      console.log("not found");
    }
  });
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], (i) => {
  console.log("Found " + i + "!");
});