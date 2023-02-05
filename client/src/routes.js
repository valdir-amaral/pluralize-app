//layouts
import gradient from './lib/layouts/gradient.svelte'

//pages
import firstpage from './pages/firstpage.svelte'

export const routes = [
    {
        name: '/',
        layout: gradient,
        component: firstpage
    }
]