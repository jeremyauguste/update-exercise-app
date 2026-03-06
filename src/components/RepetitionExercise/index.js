import { useState, useEffect } from 'react'

function RepetitionExercise({ setHeader }) {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h3>Reps: {count}</h3>
            <div style={{ display: 'flex', width: '80%', justifyContent: 'space-evenly', marginLeft: 'auto', marginRight: 'auto' }}>
                <button onClick={() => { setCount(c => c + 1) }}>Complete Rep</button>
                <button onClick={() => { setCount(0) }}>Reset</button>

            </div>
            <div style={{ display: 'flex', width: '80%', justifyContent: 'space-evenly', marginLeft: 'auto', marginRight: 'auto' }}>
                <button onClick={() => { setHeader("Choose an exercise!"); setCount(0) }}>Back</button>

            </div>
        </div>
    )
}

export default RepetitionExercise
