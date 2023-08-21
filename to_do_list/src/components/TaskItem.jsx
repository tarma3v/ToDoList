import React, { useState } from 'react';

// const TaskClicked = () => {
//     if (!this) return;
//     if (this.props.task.done == "false") {
//         this.props.task.done = "true";
//     } else {
//         this.props.task.done = "false";
//     }
// }

const TaskItem = (props) => {
    return (
        <div className="task" onClick={() => {props.onStatusChanged(
            props.task.done == "true" ? "false" : "true"
        )}}>
            <div className={props.task.done}>
                <strong>{props.number}. {props.task.title}</strong>
            </div>
        </div>
    )
}

export default TaskItem;