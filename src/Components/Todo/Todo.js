import React from 'react';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from '@material-ui/icons/Check';
import './Todo.css';
import './TodoResponsive.css';

const Todo = (props) => {
    const{name,id,isActive} = props.todo;
    return (
        <div className="todo">
            <Paper className="p-2 d-flex justify-content-between mt-3">
                <h5 className={isActive ? 'text-success' : 'text-danger line-through'}>{name}</h5>
                <div>
                <button type="button" className={isActive ? 'btn check btn-success mr-1' : 'btn check btn-success mr-1 disabled'} onClick={() => props.doneTodo(id)}><CheckIcon></CheckIcon></button>
                <button type="button" className="btn check btn-danger" onClick={() => props.removeTodo(id)}><DeleteIcon></DeleteIcon></button>
                </div>
            </Paper>
        </div>
    );
};

export default Todo;