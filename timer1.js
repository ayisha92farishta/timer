
const timer = function(alarmTimes){
 
  alarmTimes.forEach(element => {
   
    if( !isNaN(element) && element > 0 ) {
      setTimeout(() => console.log( '\x07' +  'This alarm is for ' + element ), element* 1000);
    }
  });

}

const numbers = process.argv.slice(2);

timer(numbers);
