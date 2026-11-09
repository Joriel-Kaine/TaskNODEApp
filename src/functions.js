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

function isValidPin(a) {
    if (a === null) {
        return false;
    }

    if (a === undefined) {
        return false;
    }

    if (a === '') {
        return false;
    }

    if (a.length < 4 || a.length > 6 || a.length === 5) {
        return false;
    }

    for (let i = 0; i < a.length; i++) {
        if (a[i] < '0' || a[i] > '9') {
            return false;
        }
    }

    let aux = a[0];
    for (let i = 1; i < a.length; i++) {
        if (aux !== a[i]) {
            return true;
        }
        else {
            return false;
        }
    }
}

export { fibonacci, isValidPin };