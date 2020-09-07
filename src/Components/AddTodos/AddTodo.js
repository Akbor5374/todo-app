import React from 'react';
import Grid from '@material-ui/core/Grid';
import './AddTodo.css';
import './addTodoResponsive.css';

const AddTodo = (props) => {
    return (
        <div className="add-todo mt-4">
            <div className="add ">
                <Grid container spacing={1}>
                   <Grid item xs={12} sm={7} md={9}>
                        <input type="text" placeholder="enter your todo" value={props.value} onChange={(e) => props.setNewTodo(e.target.value)} className="form-control" />
                    </Grid>
                    <Grid item xs={12} sm={5} md={3}>
                        <button type="button" className="btn btn-primary" onClick={props.addTodo}>Add Todo</button>
                    </Grid>
                </Grid>
                <div className="btns mt-3">
                    <Grid container spacing={1}>
                        <Grid item xs={6} sm={3}>
                           <button type="button" className="btn btn-info" onClick={() => props.setCategory("all")}>All Todo</button>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                           <button type="button" className="btn btn-warning" onClick={() => props.setCategory("active")}>Active Todo</button>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                           <button type="button" className="btn btn-success" onClick={() => props.setCategory("done")}>Done Todo</button>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                           <button type="button" className="btn btn-danger" onClick={props.clearDatabase}>Clear Todo</button>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    );
};
export default AddTodo;
