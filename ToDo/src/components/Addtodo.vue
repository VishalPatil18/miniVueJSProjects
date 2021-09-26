<template>
    <div>
        <form @submit.prevent="addTodo">
            <input name="title" type="text" v-model="title" placeholder="Add Todo...">
            <input type="submit" value="Submit" class="btn">
        </form>
    </div>
</template>

<script>
// import uuid from 'uuid';
export default {
    name: 'Addtodo',
    data() {
        return {
            title: '',
        }
    },
    methods : {

        addTodo() {
            // e.preventDefault();
            const newTodo = {
                // id: uuid.v4(),
                title: this.title,
                completed: false,
            }
            this.$emit('add-todo', newTodo);
            this.title = '';
        }
    }
}
</script>

<style scoped>
form{
    display: flex;
}
input[type="text"] {
    flex: 10;
    padding: 5px;
    font-size: 24px;
    background: #2a13ff;
    color: #fff;
}
input[type="submit"] {
    flex: 2;
}
</style>