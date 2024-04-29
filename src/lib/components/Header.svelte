<script lang="ts">
  import { page } from "$app/stores";
  import { links } from "$lib/links";

  let pageTitle: string | null = null;
  $: {
    const link = links.find(({ href }) => href === $page.url.pathname);
    if (link) {
      pageTitle = link.name;
    } else {
      pageTitle = null;
    }
  }
</script>

<header
  class="layout-md flex justify-between items-start mb-3 sm:mb-1"
  data-sveltekit-noscroll
  data-sveltekit-preload-code="eager"
>
  <h1 class="font-bold text-[#DDDDDD] text-2xl">
    <a href="/">Jax Dunfee</a>
    {#if pageTitle}
      <span class="page-title">
        <span class="text-neutral-400">—</span>
        {pageTitle}
      </span>
    {/if}
  </h1>
  <nav>
    {#each links as link (link)}
      <a
        href={link.href}
        class="hover:text-[#DAA520] transition-colors"
        class:text-[#DAA520]={$page.url.pathname === link.href}
      >
        {link.name}
      </a>
    {/each}
  </nav>
</header>

<style lang="postcss">
  nav {
    @apply flex items-start text-neutral-500 justify-end space-x-6 text-lg py-0.5;
  }

  .page-title {
    @apply font-light;
  }

  @media (max-width: 580px) {
    .page-title {
      @apply block text-xl;
    }

    .page-title :first-child {
      @apply hidden;
    }
  }

  @media (max-width: 420px) {
    nav {
      @apply flex-col items-end space-x-0;
    }
  }
</style>
