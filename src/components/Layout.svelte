<script context="module">
  import { Link } from 'yrv';

  import '../../node_modules/modern-normalize/modern-normalize.css';
</script>

<style type="text/scss">
  @import '../styles/variables.scss';

  :global(body) {
    background-color: $primary-color;
  }

  :global([aria-current]:not([aria-current='false'])) {
    background-color: $secondary-active-color;
  }

  .layout {
    &__header {
      width: 80px;
      height: 100%;
      background-color: $secondary-color;
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;

      svg {
        fill: $header-icon-hover-color;
      }
    }
  }
</style>

<div class="layout">
  <div class="layout__header">
    <ul>
      <li>
        <Link href="/">
          <svg xmlns="http://www.w3.org/2000/svg" height="45" viewBox="0 0 30 30" width="45">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36
              7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z" />
          </svg>
        </Link>
      </li>
      <li>
        <Link href="/fav">
          <svg xmlns="http://www.w3.org/2000/svg" height="38" viewBox="0 0 30 30" width="38">
            <path
              d="M3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1zm17-4H8c-1.1 0-2
              .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 9h-8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1
              1zm-4 4h-4c-.55 0-1-.45-1-1s.45-1 1-1h4c.55 0 1 .45 1 1s-.45 1-1 1zm4-8h-8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45
              1-1 1z" />
          </svg>
        </Link>
      </li>
      <li>
        <Link href="/settings">
          <svg xmlns="http://www.w3.org/2000/svg" height="38" viewBox="0 0 30 30" width="38">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49
              1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38
              2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11
              1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73
              1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0
              .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57
              3.5-3.5 3.5z" />
          </svg>
        </Link>
      </li>
    </ul>
  </div>
  <div class="layout__container">
    <slot />
  </div>
  <div class="layout__footer" />
</div>
