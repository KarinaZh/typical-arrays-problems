exports.min = function min(array) {
    if (typeof(array) == "undefined") {
        return 0;
    } else {
        return Math.min.apply(null, array);
    }
}

exports.max = function max(array) {
    if (typeof(array) == "undefined") {
        return 0;
    } else {
        return Math.max.apply(null, array);
    }
}

exports.avg = function avg(array) {
    if (typeof(array) == "undefined") {
        return 0;
    } else {
        return (array.reduce((sum, n) => (sum + n), 0) / array.length);
    }
}
