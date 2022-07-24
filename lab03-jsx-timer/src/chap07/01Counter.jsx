import React, { useState } from "react";

/**
 * 함수에 값을 표시하게 되면 값은 변화시킬 수 있지만 
 * 재렌더링이 일어나지 않아 화면에 표시되지 않는다.
 */
function useCounter1(props) {
    // let count = 0; //? 
    var count = 0;

    return (
        <div>
            <p>총 {count}번 클릭했습니다.</p>
            <button onClick={() => count++}>
                클릭
            </button>
        </div>
    );
}

export default useCounter1;