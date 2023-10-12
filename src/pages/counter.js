import { useState } from "react"

export default function Counter() {
    const [counter, setCounter] = useState(0)

    function increaseCounter() {
        setCounter(counter + 1)
    }

    return <div>
        <div>We are at count: {counter}</div>

        <button onClick={increaseCounter}>Increase count</button>
    </div>
}