import { useRef, useCallback } from 'react';

const useDebounce = (fn, delay) => {
    const activeTimeout = useRef();
    const invokeFn = useCallback(() => {
        if (activeTimeout.current) {
            window.clearTimeout(activeTimeout.current)
        }
        if (delay !== Infinity) {
            activeTimeout.current = window.setTimeout(() => fn(), delay)
        }
    }, [fn, delay]);

    return invokeFn;
}

export default useDebounce;
