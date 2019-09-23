function getCurrentTime(onSuccess, onFail) {
    // Get the current 'global' time from an API
    return setTimeout(function() {
      // randomly decide if the date is retrieved or not
      var didSucceed = Math.random() >= 0.5;
      console.log(didSucceed);
      if (didSucceed) {
        var currentTime = new Date();
        onSuccess(currentTime);
      } else {
        onFail('Unknown error');
      }
    }, 2000);
  }
  getCurrentTime(function(currentTime) {
    getCurrentTime(function(newCurrentTime) {
      console.log('The real current time is: ' + currentTime);
    }, function(nestedError) {
      console.log('There was an error fetching the second time');
    })
  }, function(error) {
    console.log('There was an error fetching the time');
  });