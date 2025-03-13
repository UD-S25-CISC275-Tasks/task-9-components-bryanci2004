import React, { useState } from "react";
import { Button } from "react-bootstrap";

// This function simulates rolling a six-sided die.
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    // Set initial values for both dice.
    // We ensure the two dice are not the same.
    let leftInitial = 3;
    let rightInitial = 6;
    while (leftInitial === rightInitial) {
        rightInitial = d6();
    }

    // Create state variables for the left and right dice.
    const [leftDie, setLeftDie] = useState<number>(leftInitial);
    const [rightDie, setRightDie] = useState<number>(rightInitial);

    // Function to roll the left die.
    function rollLeft(): void {
        setLeftDie(d6());
    }

    // Function to roll the right die.
    function rollRight(): void {
        setRightDie(d6());
    }

    // Determine the result message if the dice are equal.
    let message = "";
    if (leftDie === rightDie) {
        if (leftDie === 1) {
            message = "Lose"; // Snake eyes
        } else {
            message = "Win";
        }
    }

    return (
        <div>
            <div>
                <span data-testid="left-die">Left Die: {leftDie}</span>
            </div>
            <div>
                <span data-testid="right-die">Right Die: {rightDie}</span>
            </div>
            <div>
                <Button onClick={rollLeft}>Roll Left</Button>
                <Button onClick={rollRight}>Roll Right</Button>
            </div>
            {message && <div>{message}</div>}
        </div>
    );
}
