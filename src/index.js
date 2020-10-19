module.exports = function reverse (n) {
    n = Math.abs(n);
    n = n + '';
    n = n.split('').reverse()
    n = n.join('');
    return n 
}