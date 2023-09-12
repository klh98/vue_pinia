import {defineStore} from 'pinia'

export const useTaskStore= defineStore('taskStore', {
    state: () => ({
        tasks: [
            {id : 1, title: 'buy some milk', isFav: false},
            {id : 2, title: 'play game', isFav: true},
            {id : 3, title: 'go shopping', isFav: true},
            {id : 4, title: 'read books', isFav: false},
        ],
        name: 'Vue Pinia App'
    }),
    getters:{
        favs()
        {
            return this.tasks.filter(el => el.isFav)
        },
        favCount()
        {
            return this.tasks.reduce((p, c) => {
                return c.isFav ? p+1 : p
            }, 0)
        },
        totalCount: (state) => {
            return state.tasks.length
        }
    },
    actions:{
        addTask(task)
        {
            this.tasks.push(task)
        },
        deleteTask(id)
        {
            this.tasks= this.tasks.filter(el => {
                return el.id !== id
            })
        },
        toggleFav(id)
        {
            const task = this.tasks.find(t => t.id === id)
            task.isFav = !task.isFav
        }
    }

})