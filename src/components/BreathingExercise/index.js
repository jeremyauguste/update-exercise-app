import { useEffect, useState } from "react";

export default function BreathingExercise({ setHeader }) {
    const [ms, setMs] = useState(0);
    const [startTime, setStartTime] = useState();
    const [timer, setTimer] = useState(0)
    const [running, setRunning] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setRunning(r => {
                if (r) {
                    setStartTime(st => {
                        setMs((ms) => {
                            let m = Date.now() - st

                            setTimer(t => {
                                if (m > t) {
                                    r = !r;
                                }
                                return t
                            })

                            return m
                        });
                        return st;
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
        <div>
            <h2>Hold Your Breath!</h2>
            <h3>Countdown: {String(ms <= timer ? Math.floor((timer - ms) / 1000) % 60 : 0).padStart(2, '0')}</h3>
            <div style={{ display: 'flex', width: '80%', justifyContent: 'space-evenly', marginLeft: 'auto', marginRight: 'auto' }}>
                <button onClick={() => {
                    setTimer(11000)
                    setMs(0)
                    setStartTime(Date.now())
                    if (!running) {
                        setRunning(r => !r);
                    }
                }}>10 Seconds</button>

                <button onClick={() => {
                    setTimer(21000)
                    setMs(0)
                    setStartTime(Date.now())
                    if (!running) {
                        setRunning(r => !r);
                    }
                }}>20 Seconds</button>

                <button onClick={() => {
                    setTimer(31000)
                    setMs(0)
                    setStartTime(Date.now())
                    if (!running) {
                        setRunning(r => !r);
                    }
                }}>30 Seconds</button>
            </div>

            <div style={{ display: 'flex', width: '80%', justifyContent: 'space-evenly', marginLeft: 'auto', marginRight: 'auto' }}>
                <button onClick={() => { setHeader("Choose an exercise!") }}>Back</button>
            </div>
        </div>
    )
}