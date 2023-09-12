<template>
  <main>
    <header>
      <img src="./assets/500.png" alt="pinia logo">
      <h2>{{taskStore.name}}</h2>
    </header>

    <!-- new task form  -->
    <div class="new-task-form">
      <TaskForm></TaskForm>
    </div>


    <!-- filter -->
    <nav class="filter">
      <button @click="filter= 'all'">All tasks</button>
      <button @click="filter= 'favs'">Fav tasks</button>
    </nav>

    <div class="task-list" v-if="filter === 'all'">
      <p>You have {{taskStore.totalCount}} tasks to do</p>
      <div v-for="task in taskStore.tasks" :key="task.id">
        <TaskDetail :task="task"></TaskDetail>
      </div>
    </div>

    <div class="task-list" v-if="filter === 'favs'">
      <p>You have {{taskStore.favCount}} favs tasks to do</p>
      <div v-for="task in taskStore.favs" :key="task.id">
        <TaskDetail :task="task"></TaskDetail>
      </div>
    </div>
  </main>
</template>

<script>

  import {useTaskStore} from './store/TaskStore'
  import TaskDetail from './components/TaskDetail.vue'
  import TaskForm from './components/TaskForm.vue'
  import {ref} from 'vue'

  export default {
    name:"App",
    components: {TaskDetail, TaskForm},
    setup(){
      const taskStore= useTaskStore()

      const filter = ref('all')

      return {taskStore, filter}
    }
  }
</script>

<style lang="scss" scoped>

</style>