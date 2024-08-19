const theList = [
  "Laurence",
  "Svekis",
  true,
  35,
  null,
  undefined,
  { test: "one", score: 55 },
  ["one", "two"],
];

//remove the first item and the last item from the list
theList.shift();
theList.pop();



//add "FIRST" to start of array
theList.unshift("FIRST");

//add "hello world" as the fourth item
theList.splice(3, 0, "hello world");

//change the third item to "MIDDLE"
theList[2] = "MIDDLE";
//Remove unnecessary items
theList.splice(4, 4);

theList.push("LAST");
console.log(theList);
