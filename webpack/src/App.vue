<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodo="addTodo"></TodoInput>
    <TodoList
      v-bind:propsdata="todoItems"
      v-on:removeTodo="removeTodo"
    ></TodoList>
    <TodoFooter v-on:removeAll="clearAll"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  name: "app",
  data() {
    return {
      todoItems: []
    };
  },
  methods: {
    addTodo(todoItem) {
      // alert("app");
      localStorage.setItem(todoItem, todoItem);
      this.todoItems.push(todoItem);
    },

    removeTodo(todoItem, index) {
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1);
    },

    clearAll() {
      localStorage.clear();
      this.todoItems = [];
    }
  },

  created() {
    // 처음 앱 실행 시 로컬 스토리지 안의 데이터를 가져와 출력하기 위함!
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          this.todoItems.push(localStorage.key(i));
        }
      }
    }
  },

  components: {
    TodoHeader: TodoHeader,
    TodoInput: TodoInput,
    TodoList: TodoList,
    TodoFooter: TodoFooter
  }
};
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f6;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
