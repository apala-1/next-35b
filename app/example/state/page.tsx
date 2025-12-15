"use client";
// user interactivity/states

import { useState } from "react";
export default function Page() {
    const [ count, setCount ] = useState(1);
    // state hooks
    // [value, setter func]
    // state is variable that causes component to re-render when changed
    // when count changes, component using "count" re-renders

    const handlePlus = () => {
        setCount(count + 1);
    }
    return (
        // render this when state changes
        <div>
            <div>Count: {count}</div>
            <button onClick={handlePlus} className="border p-2 bg-blue-500 text-white rounded">Plus</button>
            <button onClick={  () => setCount(count-1)} className="border p-2 bg-pink-500 text-white rounded">Minus</button>
        </div>
    );
}