module.exports.favoriteNumber = undefined;

favoriteNumber = function(fav, guess) {
  if (guess > fav) {
    return "Too high";
  } 
  else if (guess < fav) {
    return "Too low";
  }
  else (guess == fav) {
    return "You got it!";
  }
};

//Take two arguments, the first is the favorite number and the second is a guess at what the favorite number is
//This function should return:
//"Too high" if guess is greater than fav
//"Too low" if guess is less than fav
//"You got it!" if guess is equal to fav

module.exports.checkLock = undefined;

module.exports.canIGet = undefined;