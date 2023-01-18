const timer1 = time => {
  for (let i = 0; i < time.length; i++){
    if(time[i] > 0 && time[i] !== NaN){
      setTimeout(() => {
        process.stdout.write('beep');
      }, time[i] * 1000);
    }
}};

timer1([10, 3, 5, 15, 9]);