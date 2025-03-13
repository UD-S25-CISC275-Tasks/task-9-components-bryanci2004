import React, { useState } from "react";
import { Button } from "react-bootstrap";

// Define our five holidays.
export type Holiday =
    | "Christmas"
    | "Easter"
    | "Halloween"
    | "Independence Day"
    | "Thanksgiving";

// Map each holiday to an emoji.
const holidayEmojis: Record<Holiday, string> = {
    Christmas: "🎄",
    Easter: "🐰",
    Halloween: "🎃",
    "Independence Day": "🇺🇸",
    Thanksgiving: "🦃"
};

// Next holiday in alphabetical order:
// Alphabetical order of the holiday names: Christmas, Easter, Halloween, Independence Day, Thanksgiving.
const alphabeticalNext: Record<Holiday, Holiday> = {
    Christmas: "Easter",
    Easter: "Halloween",
    Halloween: "Independence Day",
    "Independence Day": "Thanksgiving",
    Thanksgiving: "Christmas"
};

// Next holiday by time in the year:
// (For example: Easter in spring, then Independence Day in summer, Halloween in fall, Thanksgiving later in fall, then Christmas in winter.)
const yearOrderNext: Record<Holiday, Holiday> = {
    Easter: "Independence Day",
    "Independence Day": "Halloween",
    Halloween: "Thanksgiving",
    Thanksgiving: "Christmas",
    Christmas: "Easter"
};

export function CycleHoliday(): React.JSX.Element {
    // Start with an initial holiday.
    const [holiday, setHoliday] = useState<Holiday>("Easter");

    // Change to the next holiday alphabetically.
    function advanceAlphabet(): void {
        setHoliday(alphabeticalNext[holiday]);
    }

    // Change to the next holiday by year.
    function advanceYear(): void {
        setHoliday(yearOrderNext[holiday]);
    }

    return (
        <div>
            <div>Holiday: {holidayEmojis[holiday]}</div>
            <Button onClick={advanceAlphabet}>Advance by Alphabet</Button>
            <Button onClick={advanceYear}>Advance by Year</Button>
        </div>
    );
}
