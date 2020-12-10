function atimtis(a, b) {
    if (typeof a !== 'number') {
        return false;
    }
    if (isNaN(a)) {
        return false;
    }
    if (!isFinite(a)) {
        return false;
    }
    if (typeof b !== 'number') {
        return false;
    }
    if (isNaN(b)) {
        return false;
    }
    if (!isFinite(b)) {
        return false;
    }
    return a - b;
}

export { atimtis }