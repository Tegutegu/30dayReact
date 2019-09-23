var promise = new Promise(function(resolve, reject) {
    // call resolve if the method succeeds
    resolve(true);
  })
  promise.then(bool => console.log('Bool is true'))