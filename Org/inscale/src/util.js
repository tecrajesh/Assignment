export const getValidDate = (d) => new Date(d);

export const isTodayInBetween = (fromDate, toDate, givenDate) => getValidDate(givenDate) <= getValidDate(toDate) && getValidDate(givenDate) >= getValidDate(fromDate);

export const abbrNum = (number, decPlaces) => {
  decPlaces = Math.pow(10, decPlaces);
  var abbrev = ["K", "M", "B", "T"];
  for (var i = abbrev.length - 1; i >= 0; i--) {
    var size = Math.pow(10, (i + 1) * 3);
    if (size <= number) {
      number = Math.round(number * decPlaces / size) / decPlaces;
      number += abbrev[i];
      break;
    }
  }

  return number;
}

