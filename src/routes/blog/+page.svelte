<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import PostList from "$lib/components/PostList.svelte";
  import type { Post } from "$lib/post";

  export let data: {
    posts: Post[];
  };

  // basically, if activeChips is empty, we want to show all posts except notes
  let defaultActiveChips: Set<string> = new Set(
    data.posts.map((post) => post.tags).flat()
  );
  defaultActiveChips.delete("notes");

  const allChips = [...defaultActiveChips].sort();
  allChips.unshift("notes");

  let activeChips: Set<string> = new Set();

  const getFilteredPosts = (activeChips: Set<string>) => {
    return data.posts.filter(
      (post) =>
        post.published &&
        post.tags.some((tag) =>
          (activeChips.size ? activeChips : defaultActiveChips).has(tag)
        )
    );
  };

  const getChipStyle = (activeChips: Set<string>, tag: string) => {
    const colors: any = {
      default: {
        inactive:
          "cursor-pointer hover:bg-neutral-600 text-white hover:outline-dashed outline-1",
        active: "cursor-pointer bg-gray-300 text-gray-700",
      },
    };

    return colors[colors[tag] ? tag : "default"][
      activeChips.has(tag) ? "active" : "inactive"
    ];
  };
</script>

<Seo
  title="Jax Dunfee · Blog"
  description="My blog on cybersecurity and computer science."
/>

<section class="layout-md transition py-12">
  <div class="flex justify-between mb-1">
    <div class="flex text-lg">Blog Posts</div>
    <div class="flex gap-2">
      {#each [...allChips] as tag}
        <button
          class={"px-2 py-1 text-sm rounded " + getChipStyle(activeChips, tag)}
          on:click={() => {
            activeChips.has(tag)
              ? activeChips.delete(tag)
              : activeChips.add(tag);
            // i love svelte
            activeChips = activeChips;
          }}
        >
          #{tag}
        </button>
      {/each}
    </div>
  </div>

  <PostList posts={getFilteredPosts(activeChips)} />
</section>
