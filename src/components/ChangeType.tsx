import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");
    function flipType(): void {
        // Set type to be the logical opposite of its previous value
        setType(
            type === "multiple_choice_question" ?
                "short_answer_question"
            :   "multiple_choice_question",
        );
    }
    return (
        <div>
            <Button onClick={flipType}>Change Type</Button>
            <div>
                {type === "multiple_choice_question" ?
                    "Multiple Choice"
                :   "Short Answer"}
            </div>
        </div>
    );
}
