import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempt, setAttemptNum] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);

    function startQuiz(): void {
        if (attempt > 0) {
            setInProgress(true);
            setAttemptNum((prevAttempt) => prevAttempt - 1);
        }
    }

    function stopQuiz(): void {
        setInProgress(false);
    }

    function addAttempt(): void {
        setAttemptNum((prevAttempt) => prevAttempt + 1);
    }

    return (
        <div>
            <div>Number of Attempts: {attempt}</div>
            <Button onClick={startQuiz} disabled={inProgress || attempt === 0}>
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!inProgress}>
                Stop Quiz
            </Button>
            <Button onClick={addAttempt} disabled={inProgress}>
                Mulligan
            </Button>
        </div>
    );
}
