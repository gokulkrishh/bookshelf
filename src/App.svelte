<script>
  import { Router, Link, Route } from 'svelte-routing';
  import Layout from './components/Layout.svelte';
  import Home from './routes/Home.svelte';

  export let url = '';
</script>

<style>

</style>

<Router {url}>
  <Layout>
    <Route path="/">
      <Home />
    </Route>
  </Layout>
</Router>
