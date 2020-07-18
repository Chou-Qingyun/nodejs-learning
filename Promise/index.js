/*
- Promise 
    - 当前事件循环得不到的结果，但未来的事件循环会给到你结果
    - 是一个状态机
        - pending
        - fulfilled/resolved
        - rejected
 */

(function() {
    var promise = new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve();
        }, 500);
    });

    console.log(promise);

    setTimeout(() => {
        console.log(promise);
    }, 800);

})();