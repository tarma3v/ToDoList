import React, { useState } from 'react';
import TaskItem from './TaskItem';

const TaskList = ({tasks, title, onTaskItemChanged}) => {
    return (
        <div>
            <h1 class="logo">{title}</h1>
            { tasks.map((task, index) =>
                <TaskItem 
                    number={index + 1} 
                    task={task} 
                    key={task.id} 
                    onStatusChanged={
                        (state) => {
                            onTaskItemChanged(task.id, state)
                        }
                    }/>
            ) }
        </div>
    )
}

export default TaskList;