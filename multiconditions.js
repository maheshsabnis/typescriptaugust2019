function validate(x) {
    var type = typeof (x);
    switch (type) {
        case 'number':
            console.log("x is number with value as " + x);
            break;
        case 'string':
            console.log("x is string with value as " + x);
            break;
        case 'boolean':
            console.log("x is boolean with value as " + x);
            break;
    }
}
validate(10);
validate("ABC");
validate(true);
