function counter() {
  let counterVariable = 0;
  setInterval(() => {
    counterVariable += 1;
    console.log("Counter:", counterVariable);
  }, 1000);
}

counter();
