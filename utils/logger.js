module.exports = function logger (type) {
    return () => {
        console.log(`LOGGER: ${type}`, arguments);
    };
};
