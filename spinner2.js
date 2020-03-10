const spin = (time, interval) => {
  const arr = ["|", "/", "-", "\\"];

  for (let t = 0; t < time; t += 1) {
    setTimeout(() => {

      for (let i = 0; i < arr.length; i++) {
        setTimeout(() => {
          process.stdout.write(`\r${arr[i]}   `);
        }, interval * i);
      }
      
    }, t * interval * 4);
  }

  setTimeout(() => {process.stdout.write(`\r\n`)}, interval * 4 * time);
};

spin(10, 200);