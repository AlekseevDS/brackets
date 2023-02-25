module.exports = function check(str, bracketsConfig) {
    const bracketMap = new Map;
    for (let config of bracketsConfig) {
        const key = config[0];
        const value = config[1];
        bracketMap.set(key, value);
    }
    let stackBrackets = [];
    for (let symbol of str) {
        if (bracketMap.get(stackBrackets[stackBrackets.length - 1]) === symbol) {
            stackBrackets.pop()
        } else {
            stackBrackets.push(symbol)
        }
    }
    return stackBrackets.length === 0;
}
