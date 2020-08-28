console.log(checkType(999));

function checkType(variable) {
    if(typeof(variable) === 'number') {
        return 1;
    } else if(typeof variable === 'string') {
        return 0;
    } else {
        return -1;
    }
}