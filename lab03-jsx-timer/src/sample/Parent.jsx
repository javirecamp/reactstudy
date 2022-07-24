import { useEffect, useMemo, useRef } from "react";
import { useState, useCallback  } from "react";
import Children from "./Children";

// const list = [
//     { key: 1, name: 'toto1' },
//     { key: 2, name: 'toto2' },
//     { key: 3, name: 'toto3' },
//     { key: 4, name: 'toto4' },
//     { key: 5, name: 'toto5' },
//     { key: 6, name: 'toto6' },
//     { key: 7, name: 'toto7' },
//     { key: 8, name: 'toto8' },
// ];

const Parent = () => {
    const shadowCount = useRef(0);
    const intervalRef = useRef(null);
    const [count, setCount] = useState(0);
    const [list, setList] = useState(() => [...new Array(100)].map((_, index) => ({ key: index, name: `toto-${index}`})));

    const addCount = useCallback((nextCount) => {
        setCount(prevState => prevState + nextCount);
        shadowCount.current = shadowCount.current + nextCount;
    }, []);

    const filtered = useMemo(() => list.filter(({ key }) => key > 50), [list]);

    const alertShadowCount = useCallback(() => {
        console.group('TEST');
        console.log(count);
        console.log(shadowCount.current);
        console.groupEnd();
    }, []);

    useEffect(() => {
        if (count > 50) {
            intervalRef.current = setInterval(() => {console.log('hello')}, 1000);
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [count]);


    return (
        <div>
            Count: {count}
            <br />
            <button type="button" onClick={alertShadowCount}>Show Me</button>
            <button type="button" onClick={() => addCount(2)}>Add!!</button>
            <br />
            <Children count={count} addCount={addCount} list={filtered} /> 
        </div>
    );
};

export default Parent;