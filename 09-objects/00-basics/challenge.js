module.exports.createCourse = function(courseTitle, courseDuration, courseStudents){
  var course = {title:courseTitle, duration:courseDuration, students:courseStudents}
  return course;
};

module.exports.addProperty = function(){

};

//Complete the addProperty function. This function should:
//Take three arguments:
//object: an object to add a properties to
//newProp: a property that we want to add to the object
//newValue: a value that we want the new property to have
//If object doesn't already have a property named newProp, then add newProp with value of newValue to object
//If object already has newProp, return the object argument.

module.exports.formLetter = function(){

};

//Complete the formLetter function. This function should:
//take one argument, a letter, which has three properties recipient, sender, and msg
//combine the three properties into a single string with an additional greeting and closing
//insert additional new lines between the greeting, message, and signature.

module.exports.canIGet = function (){

};

//Take two arguments:
//item: represents what the user wants to buy
//money: represents how many dollars a user has
//return true if a user can afford a given item according to the price chart below, and false otherwise:
//'MacBook Air' - $999
//MacBook Pro' - $1299
//'Mac Pro' - $2499
//'Apple Sticker' - $1
//Return false if the item is not in the above list of Apple products
//Do this with 0 'if' conditions! (Hint: Place the above price table in an object).