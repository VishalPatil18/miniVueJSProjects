<template>
    <div id="app">
        <Calculator />
    </div>
</template>

<!-- script block - the data and the logic for the template is maintained. Its similar to JS -->
<script>
import Calculator from './components/Calculator.vue'

export default {
    name: 'App',
    components: {
        Calculator,
    }
};
</script>

<!-- style block - here we style the markup template elements -->
<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

label {
    font-weight: bold;
    display: flex;
    margin-bottom: 5px;
}

input + label {
    font-weight: bold;
    display: flex;
    margin-right: 20px;
}

input[type='text'],
textarea,
select {
    display: inline-block;
    width: 400px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
}

</style>