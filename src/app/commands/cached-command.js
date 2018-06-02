export default (promiseGetter) => {
    let cache = null;
    return () => {
        if (cache) {
            return cache;
        }
        cache = promiseGetter();
        return cache;
    }
}
