<template>
    <div id="app">
        <p>Hello world</p>
        <button v-on:click="newToDos">Add Todo</button>
        <ol>
            <todo-item v-for="todo in todos" v-bind:todo="todo"></todo-item>
        </ol>
    </div>
</template>

<script>
var Vue = require('vue')
var Component = Vue.component('app', {
    data: function(){
        return { todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
        ]}
    },
    methods: {
        newToDos: function () {
            this.todos.push({ text: 'Learn Webpack' })
        }
    },
    components: {
        'todo-item':  {
            props: ['todo'],
            template: '<li>{{ todo.text }}</li>'
        }
    }
})
module.exports = Component
</script>

<style lang='sass'>
body {
  font-family: Helvetica, sans-serif;
}
</style>