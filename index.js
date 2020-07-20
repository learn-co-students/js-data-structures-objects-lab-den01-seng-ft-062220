// Write your solution in this file!
let driver = {};
function updateDriverWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  return Object.assign(driver, {[key]: value});
}

function deleteFromDriverByKey(driver, key){
  let newDriver = Object.assign({}, driver)
  delete newDriver[key];
  console.log(driver, newDriver);
  return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key];
  return driver;
}