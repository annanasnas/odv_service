import Main from '../views/Main.vue'
import Contacts from '../views/Contacts.vue'
import Examples from '../views/Examples.vue'
import Types from '../views/Types.vue'

export const routes = [
    {
        publicPath: '/',
        path: '/',
        component: Main
    },
    {
        publicPath: './contacts',
        path: '/contacts',
        component: Contacts
    },
    {
        publicPath: './examples',
        path: '/examples',
        component: Examples
    },
    {
        publicPath: './types',
        path: '/types',
        component: Types
    }
]