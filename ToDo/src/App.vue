<template>
    <div id="app">
        <Header />
        <Addtodo v-on:add-todo="addTodo"/>
        <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo"/>
        
    </div>
</template>

<!-- script block - the data and the logic for the template is maintained. Its similar to JS -->
<script>
import Todos from './components/Todos';
import Header from './components/layout/Header';
import Addtodo from './components/Addtodo';
import axios from 'axios';
export default {
    name: 'App',
    components: {
        Todos,
        Header,
        Addtodo,
    },
    data() {
        return {
            todos: [],
        }
    },
    methods: {
        deleteTodo(id) {
            axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            // eslint-disable-next-line
            .then(res => this.todos = this.todos.filter(todo => todo.id !== id))
            .catch(err => console.log(err));
        },
        addTodo(newTodo) {
            const {title, completed } = newTodo;
            axios.post('https://jsonplaceholder.typicode.com/todos', {
                title,
                completed
            })
            .then(res => this.todos = [...this.todos, res.data])
            .catch(err => console.log(err));
            // with the ... we are copying the already persent content and then adding the newTodo to the object
        },
    },
    created() {
        // get the data from the fake jsonplaceholder api
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then(res => this.todos = res.data)
        .catch(err => console.log(err));
    }
};
</script>

<!-- style block - here we style the markup template elements -->
<style>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
body{
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
    width: 550px;
    margin: 0 auto;
    margin-top: 80px;
    border: solid 2px #000;
    border-radius: 80px 80px 0 0;
    background-image: linear-gradient(to right, #cc2e5d, #2a13ff);
}
.btn{
    display: inline-block;
    border: none;
    background: #cc2e5d;
    color: #fff;
    transition-duration: 0.5s;
    font-size: 24px;
    font-weight: 700;
    padding: 7px 20px;
    cursor: pointer;
}
.btn:hover{
    background: #2a13ff;
    color: #fff;
    transition-duration: 0.5s;
}
</style>