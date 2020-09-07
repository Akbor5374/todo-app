import React, { useState, useEffect }from 'react';
import './Home.css';
import AddTodo from '../AddTodos/AddTodo';
import Todo from '../Todo/Todo';

const Home = () => {
    const [newTodo, setNewTodo] = useState('');
    const  [toDos, setToDos] = useState([]);
    const [category, setCategory] = useState("all");
    const[categoryFilter, setCategoryFilter] = useState([]);
   
    useEffect( () => {
        const items = localStorage.getItem("toDos");
        items && setToDos(JSON.parse(items));
    }, []);

    //ad todo
    const addTodo = () => {
        const creatNewTodo = {
          name: newTodo,
          isActive: true,
          id: new Date().getTime() + Math.random()
        };
        const newToDos = [...toDos, creatNewTodo];
        setToDos(newToDos);
        localStorage.setItem("toDos", JSON.stringify(newToDos));
        setNewTodo('');
    };
   
   //done todo
    const doneTodo = (id) => {
        const newToDos = toDos.map(todo => {
           if(todo.id === id){
               todo.isActive = false;
           }
           return todo;
        });
        localStorage.setItem("toDos", JSON.stringify(newToDos));
        setToDos(newToDos);
    };

    //remove todo
    const removeTodo = (id) => {
        const newToDos = toDos.filter(todo => todo.id !== id);
        localStorage.setItem("toDos", JSON.stringify(newToDos));
        setToDos(newToDos);
    }


   // clear database and state
    const clearDatabase = () => {
        localStorage.setItem("toDos", JSON.stringify([]));
        setToDos([]);
    }
    //category
    useEffect( () => {
        if(category === "all"){
            setCategoryFilter([...toDos]);
        }
        if(category === "active"){
          const activeToDos = toDos.filter(todo => todo.isActive);
          setCategoryFilter([...activeToDos]);
        };
        if(category === "done"){
            const doneToDos = toDos.filter(todo => !todo.isActive);
            setCategoryFilter([...doneToDos]);
        }
    }, [category, toDos]);


    return (
        <div className="home container-fluid">
            <h1 className="heading text-center text-light pt-4">Todo App</h1>
            <AddTodo
             value={newTodo} 
             setNewTodo={setNewTodo}
             clearDatabase={clearDatabase}
             setCategory={setCategory}
             addTodo={addTodo}>
             </AddTodo>
            <h1 className="heading text-center text-light mt-3">You {category} ToDos {categoryFilter.length}</h1>
            {categoryFilter.map(todo => <Todo removeTodo={removeTodo} doneTodo={doneTodo} todo={todo}></Todo>)}
        </div>
    );
};

export default Home;