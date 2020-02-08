<script>
  import { Router, Route } from 'yrv';

  import Layout from './components/Layout.svelte';
  import NotFound from './components/NotFound.svelte';
  import Home from './routes/Home.svelte';
  import Settings from './routes/Settings.svelte';
  import Fav from './routes/Fav.svelte';
</script>

<style>

</style>

<Layout>
  <Router>
    <Route exact path="/" component={Home} />
    <Route fallback>Not found</Route>
    <Route path="/settings" component={Settings} />
    <Route path="/fav" component={Fav} />
  </Router>
</Layout>
