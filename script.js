let timer = 0;

let interval = setInterval(() => {
    timer++
    console.log(timer);

    if(timer >= 5) {
        clearInterval(interval);
    }
}, 1000);