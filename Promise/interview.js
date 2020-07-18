/* 
    - 执行then和catch会返回一个新Promise,该promise最终状态根据then和catch的回调函数的执行结果决定
        - 如果回调函数最终是throw，该Promise是rejected状态
        - 如果回调函数最终是return，该Promise是resolve状态
        - 但如果回调函数最终return了一个Promise，该Promise会和回调函数return的Promise状态保持一致
 */

(function() {
    var promise = interview();
    /* var promise2 = promise.then((res) => {
        return 'accept';
    }) */

    var promise2 = promise.catch(() => {
        return 'accpet';
        // throw new Error('fail');
    })

    setTimeout(() => {
        console.log(promise);
        console.log(promise2);
    }, 800);

    function interview() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 1) {
                    resolve('success');
                } else {
                    reject(new Error('fail'));
                }
            }, 500);
        });
    }
})();