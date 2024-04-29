<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import Markdown from "$lib/components/Markdown.svelte";
  import { formatTime } from "$lib/post";

  export let data;
  const post = data.post;
</script>

<Seo
  title={post?.title || "Jax Dunfee · Blog"}
  description={post?.description || "This post does not exist :("}
/>
{#if post}
  <section class="layout-md py-12">
    <hr class="mb-5" />
    <div class="mb-1.5">
      <div class="text-2xl text-[#DAA520] sm:mb-1">
        {@html post.rendered.title}
      </div>
      <div class="text-lg leading-snug font-light text-neutral sm:mb-1">
        {@html post.rendered.description}
      </div>
      <div class="flex justify-between items-start mb-3 sm:mb-1">
        <div class="text-sm text-white">
          {formatTime("%B %-d, %Y", post.date)}
        </div>
        <div class="text-sm text-white">
          {post.tags.join(", ")}
        </div>
      </div>
      <hr class="mb-6 mt-5" />
      <Markdown source={post.content} />
    </div>
  </section>
{:else}
  <div class="layout-md">
    <div
      class="pt-14 pb-40 sm:pt-20 sm:pb-80 text-xl flex justify-center items-center"
    >
      <span class="font-medium">404</span>
      <div class="mx-4 h-8 border-l border-[#DAA520]" />
      This post does not exist.
    </div>
  </div>
{/if}
