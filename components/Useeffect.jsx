import { useState, useEffect } from "react";
function Useeffect() {
    let [count, setCount] = useState(0);
    useEffect(() => {
        console.log("valeu updated");
        return (() =>
            console.log("code cleanup"))
    })
    return (
        <div>
            <button onClick={() => setCount(count + 1)}> ++</button>
            <h1> count:{count}</h1>
            <button onClick={() => setCount(count - 1)}> --</button>
        </div>
    )
}
export default Useeffect;