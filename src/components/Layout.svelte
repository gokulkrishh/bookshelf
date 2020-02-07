<script context="module">
  // import NavLink from './NavLink.svelte';

  import '../../node_modules/modern-normalize/modern-normalize.css';
</script>

<div class="layout">
  <div class="layout__header">
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/fav">My fav</a>
      </li>
      <li>
        <a href="/settings">Settings</a>
      </li>
    </ul>
  </div>
  <div class="layout__container">
    <slot />
  </div>
  <div class="layout__footer" />
</div>
