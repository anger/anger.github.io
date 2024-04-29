<script lang="ts">
  export let title: string;
  export let ogTitle: string | null = null;
  export let description: string;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta property="og:title" content={ogTitle ?? title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content="https://jax.dev/assets/images/me.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    content="Jax Dunfee · Cyber Security Engineer & Security Researcher based in the United States"
    property="twitter:title"
  />
  <meta
    content="Cyber Security Engineer and Security Researcher focused on Web and Binary Exploitation."
    property="twitter:description"
  />
</svelte:head>
