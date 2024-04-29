<script lang="ts">
  import { renderMd } from "$lib/markdown";
  export let source: string;

  $: html = renderMd(source);
</script>

<div class="md-output prose prose-invert">
  {@html html}
</div>

<style lang="postcss">
  .md-output :global(p) {
    @apply mb-4;
  }

  .md-output :global(strong) {
    @apply font-semibold;
  }

  .md-output :global(code) {
    @apply text-[95%];
  }
</style>
