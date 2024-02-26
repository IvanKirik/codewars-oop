Object.create = function (prototype, properties) {
    if (typeof prototype !== 'object' && prototype !== null) {
        throw new TypeError('Object prototype may only be an Object or null');
    }

    function Temp() {
    }

    Temp.prototype = prototype;
    const obj = new Temp();
    if (typeof properties === 'object') {
        Object.defineProperties(obj, properties);
    }
    return obj;
};
