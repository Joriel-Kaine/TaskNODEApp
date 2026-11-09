function fibonacci(n) {
    if (n < 0) throw new RangeError('Solo números enteros >= 0');

    if (n <= 1) return n;

    let previous = 0, actual = 1;

    for (let i = 2; i <= n; i++) {
        const next = previous + actual;
        previous = actual;
        actual = next;
    }

    return actual;
}

function isValidPin(pin) {
    const uniqueDigits = new Set(pin);

    return !(pin == null) && !(pin === '') && (pin.length === 4 || pin.length === 6)
        && (/^[0-9]+$/.test(pin)) && !(uniqueDigits.size === 1);
}

export { fibonacci, isValidPin };