import React, { ReactElement } from 'react';
import useCounter from '../hook/useCounter';

function CountPage(): ReactElement {
    const {
        num,
        increase,
        decrease,
    } = useCounter();

    return (
        <div>
            <div>{num}</div>
            <button type="button" onClick={increase}>increase</button>
            <button type="button" onClick={decrease}>decrease</button>
        </div>
    );
}

export default CountPage;
