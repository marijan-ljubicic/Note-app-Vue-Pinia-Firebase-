import { createRouter, createWebHashHistory } from 'vue-router'
import ViewNotes from '@/views/ViewNotes.vue'
import ViewStats from '@/views/ViewStats.vue'

const routes = [
    {
        path: '/',  // root 'notes' view of the app
        name: 'notes', // label for the route
        component: ViewNotes 
    },
    {
        path: '/stats', // stats view
        name: 'stats',
        component: ViewStats
    }
]

const router = createRouter({
    history: createWebHashHistory(), //Creates a hash history. Useful for web applications with no host (e.g. file://) or when configuring a server to handle any URL is not possible.
    routes
})

export default router // export router instance to make it available to other files