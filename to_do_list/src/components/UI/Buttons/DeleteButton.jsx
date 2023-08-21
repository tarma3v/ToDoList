import React, { useState } from 'react';
import classes from './MyButton.module.css'

const MyDeleteButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.myDltBtn}>
            {children}
        </button>
    )
}

export default MyDeleteButton;