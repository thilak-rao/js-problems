class MyPromise {
    constructor(callback) {
        function resolve(value) {
            this._complete('resolve', value);
        }

        function reject(error) {
            this._complete('reject', error);
        }

        setTimeout(callback.apply(this, [resolve.bind(this), reject.bind(this)]), 0);
    }

    then(fn) {
        this.onComplete = fn;
        return this;
    }

    catch(fn) {
        this.onError = fn;
    }

    _complete(which, args) {
        switch (which) {
            case 'resolve':
                this.onComplete.apply(this, [args]);
                break;

            case 'reject':
                if (this.onError) {
                    this.onError.apply(this, [new Error(args)]);
                }
                break;

            default:
                break;
        }
    }
}

new MyPromise((resolve, reject) => {
    console.log('a');
    setTimeout(() => {
        console.log('c');
        if (Math.round(Math.random())) {
            resolve('foo');
        } else {
            reject('error');
        }
        console.log('d');
    }, 1000);
}).then((val) => {
    console.log(val);
    console.log('b');
}).catch((error) => {
    console.log(error);
});

console.log('e');

/**
 * Should Log: a e c b d
 */
