const findWaldo = (names, found) => {
  names.forEach((element, i) => {
    if (element === "Bob") {
      found(element + " at index " + i);
    } else {
      console.log("not found");
    }
  });
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], elementAndI => console.log("Found " + elementAndI + "!"));