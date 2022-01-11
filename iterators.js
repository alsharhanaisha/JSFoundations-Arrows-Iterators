/*************************************
 * logger(array)
 *
 * - Accepts an array
 * - Logs every element of the array
 ************************************/
/*const logger = (array) => {
  array.forEach((element) => {
    console.log(element);
  });
};*/
const logger = (array) => array.forEach((element) => console.log(element));
logger([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

/*************************************
 * toCelsius(temperatures)
 *
 * - Accepts an array of temperatures
 *   in degrees Fahrenheit
 * - Returns an array of temperatures
 *   in degrees Celsius
 *
 * The conversion is:
 *   C = (F - 32) * (5/9)
 ************************************/
/*const toCelsius = (temperatures) => {
  temperatures.map((element) => {
    return (element - 32) * (5 / 9);
  });
};*/
const toCelsius = (temperatures) =>
  temperatures.map((element) => (element - 32) * (5 / 9));
console.log(toCelsius([34, 120, 55, 84, 71]));
/**************************************
 * hottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 * - Accepts a threshhold temperature
 * - Returns an array of temperatures
 *   that exceed the threshhold
 ***************************************/
/* const hottestDays = function (temperatures, threshhold) {
  return temperatures.filter((element) => {
    return element > threshhold;
  });
};*/
const hottestDays = (temperatures, threshhold) =>
  temperatures.filter((element) => element > threshhold);
const listTemp = [53, 48, 20, 9, 60, 31];
console.log(hottestDays(listTemp, 50));
/******************************************
 * logHottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 *   IN DEGREES FAHRENHEINT
 * - Accepts a threshhold temperature
 *   IN DEGREES FAHRENHEINT
 * - Logs temperatures that exceed the
 *   threshhold to the console
 *   IN DEGREES CELSIUS
 *
 * hint: you can combine
 *       all previous functions
 *******************************************/
/*const logHottestDays = function (temperatures, threshhold) {
  threshhold = [threshhold];
  return hottestDays(toCelsius(temperatures), toCelsius(threshhold));
};*/
const logHottestDays = function (temperatures, threshhold) {
  threshhold = [threshhold];
  return hottestDays(toCelsius(temperatures), toCelsius(threshhold));
};
console.log(logHottestDays([140, 68, 212, 45, 149, 122, 19], 80));
/* Uncomment the following lines to test your code... */

logger([1, 2, 3, 4, 5, 6, 7]);
console.log(toCelsius([212, 122])); // should be: [100, 50];
console.log(hottestDays([1, 2, 3, 4, 5, 6, 7, 8, 13, 156, 1765], 5)); // should be : [6, 7, 8, 13, 156, 1765]
console.log(logHottestDays([140, 68, 212, 45, 149, 122, 19], 80)); // should log "60", "100", "65", and "50"

module.exports = { logger, toCelsius, hottestDays, logHottestDays };
