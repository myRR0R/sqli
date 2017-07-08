// fp Compose
export const cp = (...funcs) => funcs.reduce((a, b) => (...args) => a(b(...args)));

// fp Trace
export const trace = (x) => {
        console.log(x)
        return x
    }; // trace