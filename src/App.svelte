<script>
  import { Router, Route } from 'svelte-routing';

  import Layout from './components/Layout.svelte';
  import NotFound from './components/NotFound.svelte';
  import Home from './routes/Home.svelte';
  import Settings from './routes/Settings.svelte';
  import Fav from './routes/Fav.svelte';

  export let url = '/';
  export let basepath = '/';
</script>

<style>

</style>

<Layout>
  <Router {url} {basepath}>
    <Route path="settings*" component={Settings} />
    <Route path="fav*" component={Fav} />
    <Route path="/" component={Home} />
  </Router>
</Layout>
