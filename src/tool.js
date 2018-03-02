const Utils = require('apex-util');

exports.genURL = (urlLength) => {
  let urlString = '';
  const sourceLetters = 'ABCDEFGHJKMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';

  for (let genLoopIndex = 0; genLoopIndex < urlLength; genLoopIndex += 1) {
    // Add a random letter to the urlString
    urlString += sourceLetters.charAt(Math.random() * (sourceLetters.length - 1));
  }
  Utils.log('sourceLetters length', sourceLetters.length, 3);
  return urlString;
};
