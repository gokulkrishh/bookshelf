<script>
  import { Router, Link, Route } from "svelte-routing";
  import Home from "./routes/Home.svelte";

  export let url = "";
</script>

<style>

</style>

<main>
  <Router {url}>
    <div>
      <Route path="/">
        <Home />
      </Route>
    </div>
  </Router>
</main>
