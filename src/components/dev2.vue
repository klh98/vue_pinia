<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <input type="text" placeholder="i need to .... " v-model="newTask">
            <button>Add</button>
        </form>
    </div>
</template>

<script>

    import { useTaskStore } from '../store/TaskStore'
    import { ref } from 'vue'


    export default {
        name:"TaskForm",

         setup()
         {
            const taskStore= useTaskStore()

            const newTask= ref('')

            const handleSubmit = () => {
                if(newTask.value.length > 0)
                {
                    taskStore.addTask({
                        title: newTask.value,
                        isFav: false,
                        id: Math.floor(Math.random() * 1000)
                    })
                    newTask.value=''
                }
            }

           
         }   

    }
</script>

<style lang="scss" scoped>

</style>
