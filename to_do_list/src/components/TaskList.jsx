import React, { useState } from 'react';
import TaskItem from './TaskItem';

const TaskList = ({tasks, title}) => {
    return (
        <div>
            <h1 class="logo">{title}</h1>
            { tasks.map((task, index) =>
                <TaskItem number={index + 1} task={task} key={task.id} />
            ) }
        </div>
    )
}

export default TaskList;