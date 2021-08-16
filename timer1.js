

const timer = function(alarmTimes){
  alarmTimes.sort((a, b) => a - b);


  alarmTimes.forEach((element, index) => {
   
    if( typeof element !== 'number' || element < 0 || alarmTimes.length <= 0) {
      return false
    }
    setTimeout(() => console.log( '\x07' +  'This alarm is for ' + element ), element* 1000)
  });

}

timer([5, 'sad', -5, 6, 3])

