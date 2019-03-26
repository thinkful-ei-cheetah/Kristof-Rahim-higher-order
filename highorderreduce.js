"use strict";

let sentence =
  "noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest";
sentence = sentence.split(" ");

sentence = sentence.reduce(function(accumulator, current) {
  if (current.length === 3) {
    return (accumulator += " ");
  } else {
    return (accumulator += `${current.slice(-1).toUpperCase()}`);
  }
}, " ");

console.log(sentence);
