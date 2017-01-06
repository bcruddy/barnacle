module.exports = function parseArgs (args) {
    if ({}.toString.call(args) !== '[object Array]') {
        args = [].slice.call(args);
    }

    return args.filter(arg => arg.indexOf('=') > -1)
        .reduce((obj, item) => {
            let [key, value] = item.split('=');

            obj[key] = value;

            return obj;
        }, {});
};
