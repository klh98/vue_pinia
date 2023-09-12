<template>
    <div class="task d-flex">
        <h3>{{task.title}}</h3>
        <div class="icons d-flex">
            <span class="material-symbols-outlined" @click="taskStore.deleteTask(task.id)">
                delete
                </span>
                <span :class="{active : task.isFav}" class="material-symbols-outlined" @click="taskStore.toggleFav(task.id)">
                    favorite
                </span>
        </div>
    </div>
</template>

<script>
import { useTaskStore } from '../store/TaskStore'
    export default {
        name: "TaskDetail",
        props: ['task'],
        setup() {

            const taskStore= useTaskStore()

            return { taskStore }
        }
    }
</script>

<style lang="scss" scoped>

</style>