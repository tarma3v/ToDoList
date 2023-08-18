import * as React from "react";

export function ToDo({ description, done }) {
    return <div>
        <span>{description}</span>
        <input type="checkbox" defaultChecked={done} />
    </div>
}