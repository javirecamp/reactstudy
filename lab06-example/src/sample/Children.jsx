import { useState, useEffect } from "react";

const Children = ({ count, addCount, list }) => {

    const [ownCount, setOwnCount] = useState(count);
    
    useEffect(() => {
        console.log('@ addCount : ', addCount);
    }, [addCount]); 

    useEffect(() => {
        setOwnCount(count + 2);
    }, [count]); 

    useEffect(() => {
        console.log('@ list', list);
    }, [list]); 

    return <div>{ownCount}</div>
};

export default Children;