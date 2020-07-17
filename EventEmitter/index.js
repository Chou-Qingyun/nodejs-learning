const geektime = require("./lib");

geektime.addListener('newlesson', (res) => {
    if (res.price < 80) {
        console.log('buy!', res);
    } else {
        console.log('太贵了！', res);
    }
})