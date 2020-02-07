<script>
  import { Link } from 'svelte-routing';

  function getProps({ location, href, isPartiallyCurrent, isCurrent }) {
    const isActive = href === '/' ? isCurrent : isPartiallyCurrent || isCurrent;
    if (isActive) return { class: 'active' };
    return {};
  }

  export let to = '';
</script>

<Link {to} {getProps}>
  <slot />
</Link>
