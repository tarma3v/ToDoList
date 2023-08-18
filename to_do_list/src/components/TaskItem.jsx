import React, { useState } from 'react';

const TaskItem = (props) => {
    return (
        <div className="task" onClick={() => {props.task.done="true"}}>
            <div className={props.task.done}>
                <strong>{props.number}. {props.task.title}</strong>
            </div>
        </div>
    )
}

export default TaskItem;