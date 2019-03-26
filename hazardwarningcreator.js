function hazardWarningCreator(typeOfWarning) {
  let warningCounter = 0;

  return function(location) {
    warningCounter++;

    console.log(`"DANGER! There is a ${typeOfWarning} hazard at ${location}!"`);
    console.log(
      `"The ${typeOfWarning} hazard alert triggered ${warningCounter} ${
        warningCounter === 1 ? "time" : "times"
      } today!"`
    );
  };
}

const rocksWarning1 = hazardWarningCreator("Rocks on the Road");
const rocksWarning2 = hazardWarningCreator("Snow on the Road");
const rocksWarning3 = hazardWarningCreator("Goats on the Road");

rocksWarning1("Main St and Pacific Ave");
rocksWarning1("Centinela Ave and Olympic Blvd");

rocksWarning2("Main St and Pacific Ave");
rocksWarning2("Centinela Ave and Olympic Blvd");

rocksWarning3("Main St and Pacific Ave");
rocksWarning3("Centinela Ave and Olympic Blvd");
