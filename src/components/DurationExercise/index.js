import { useEffect, useState } from "react";

export default function DurationExercise({ setHeader }) {
    const [ms, setMs] = useState(0);
    const [startDate, setStartDate] = useState();
    const [running, setRunning] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setRunning(r => {
                if (r) {
                    setStartDate(sd => {
                        setMs(Date.now() - sd);
                        return sd;
                    })
                }
                return r;
            })
        }, 0);

        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
        <>
            <h3>Stopwatch: {String(Math.floor(ms / 1000 / 60) % 60).padStart(2, '0') + ":" + String(Math.floor(ms / 1000) % 60).padStart(2, '0') + "." + String(ms % 1000).padStart(3, '0').substring(0, 3)}</h3>

            <div style={{ display: 'flex', width: '80%', justifyContent: 'space-evenly', marginLeft: 'auto', marginRight: 'auto' }}>

                {/* start stopwatch button */}
                <button onClick={() => {
                    if (!running) {
                        setStartDate(Date.now() - ms)
                    }
                    else {
                        setMs(ms);
                    }

                    setRunning(r => !r);

                }}>{!running ? "Start Stopwatch" : "Pause Stopwatch"}</button>

                {/* reset stopwatch button */}
                <button onClick={() => {
                    setMs(0)
                    setStartDate(Date.now())
                    if (running) { setRunning(r => !r) }
                }}>Reset Stopwatch</button>
            </div>
            <div style={{ display: 'flex', width: '80%', justifyContent: 'space-evenly', marginLeft: 'auto', marginRight: 'auto' }}>
                <button onClick={() => { setHeader("Choose an exercise!") }}>Back</button>

            </div>
        </>
    )
}
