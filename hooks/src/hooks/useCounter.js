import React, { useState } from "react";

export const useCounter = (initialvalue = 0) => {
    const [count, setCount] = useState(initialvalue)

    function inc() {
        setCount(count + 1)
    }

    function dec() {
        setCount(count - 1)
    }

    return [count, inc, dec]
}