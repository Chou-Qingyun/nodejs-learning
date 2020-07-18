(function() {
    Promise.all([
            interview('geektime'),
            interview('alibaba')
        ])
        .then(() => {
            console.log('smile');
        })
        .catch((err) => {
            //接受第一个promise失败返回的catch
            console.log('cry for ' + err.name);
        });

    function interview(name) {
        return new Promise((resolve, reject) => {
            setTimeout(function() {
                if (Math.random() > 0.2) {
                    resolve('success');
                } else {
                    var error = new Error('fail');
                    error.name = name;
                    reject(error);
                }
            }, 500);
        });
    }
})();