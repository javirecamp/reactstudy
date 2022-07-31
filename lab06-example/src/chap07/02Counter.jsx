import React, { useState } from "react";

/**
 * 클래스 컴포넌트에서는 setState함수로 모든 값을 업데이트 할 수 있었다.
 * 하지만 함수 컴포넌트에서는 useState함수를 사용할 때는 사용하는 변수가
 * 여러개 이면 여러개에 맞는 함수를 각각 적용해서 사용해야 한다.
 */
function useCounter2(props) {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>총 {count}번 클릭했습니다.</p>
            <button onClick={() => setCount(count + 1)}>
                클릭
            </button>
        </div>
    );
}

export default useCounter2;