function compareObjects(a, b) {
    const aProps = Object.getOwnPropertyNames(a),
          bProps = Object.getOwnPropertyNames(b);

    if (aProps.length !== bProps.length) {
        return false;
    }

    for (let i = 0, pLen = aProps.length; i < pLen; i++) {
       const propName = aProps[i];
        if (a[propName] !== b[propName]) {
           return false;
        }
    }

    return true;
}

const obj1 = {
    firstName: 'Thilak',
    lastName: 'Rao'
};

const obj2 = {
    firstName: 'Thilak',
    lastName: 'Rao'
};

const obj3 = {
    firstName: 'Foo',
    lastName: 'Bar'
};

console.log(compareObjects(obj1, obj2));
console.log(compareObjects(obj1, obj3));
