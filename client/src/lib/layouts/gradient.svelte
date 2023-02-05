<script>
    import { Route } from 'svelte-router-spa'
    export let currentRoute
    const params = {}
  </script>
  
  <div class="app">
    
    <section class="section">
      <Route {currentRoute}  {params} />
    </section>
  </div>
  
  <style>
    .app {
        background-color: #F6F6F6;
        min-height: 100vh;
        background-image: url(../img/bg-gradient.svg);
    }
  </style>