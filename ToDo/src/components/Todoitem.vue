<template>
    <div class="todo-item" v-bind:class="{'is-complete':todoLocal.completed}">
        <p>
            <input type="checkbox" v-on:change="markComplete">
            {{todo.title}}
            <button @click="$emit('del-todo', todo.id)" class="del">x</button>
        </p>
    </div>
</template>

<script>
export default {
    name: "Todoitem",
    props: ["todo"],
    data() {
        return {
            todoLocal: this.todo,
        }
    },
    methods: {
        markComplete() {
            this.todoLocal.completed = !(this.todoLocal.completed);
            // console.log('The function was executed');
        },
    }
}
</script>

<style scoped>
.todo-item{
    background: #fffd8f;
    font-size: 17px;
    padding: 10px;
    border-bottom: 1px #ccc dotted;
}

.is-complete{
    text-decoration: line-through;
}
.del {
    background: #ff0000;
    color: #fff;
    border: none;
    padding: 5px 9px;
    border-radius: 50%;
    cursor: pointer;
    float: right;
}
</style>