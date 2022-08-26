const intervell = setInterval(() => {
  console.log("running....");
}, 2000);

setTimeout(() => {
  clearInterval(intervell);
}, 11000);
