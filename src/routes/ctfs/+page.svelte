<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import { ArrowUpRight, Link } from "lucide-svelte";
  import { ctfEvents } from "$lib/ctfs";
</script>

<Seo
  title="Jax Dunfee"
  description="Jax Dunfee · Cyber Security Engineer & Security Researcher based in the United States"
/>

<p
  class="layout-md text-xl leading-tight font-light mb-6 text-[#DAA520]"
  id="intro"
>
  <span class="g">I primarily play the categories of </span> pwn
  <span class="g">&</span> web
</p>

<div class="layout-md text-lg space-y-5">
  <p>
    I've been writing CTF challenges for awhile now mainly in the <span
      class="underline-yellow">web</span
    >
    and <span class="underline-yellow">pwn</span> categories, though I do occasionally
    make challenges in other categories.
  </p>
  <div>
    <p>
      Please note that some of my challenges are <span class="underline-yellow"
        >private</span
      > as they were made for work, I've attempted to consolidate those that are
      public here. I greatly enjoy creating challenges that help others learn and
      grow, and I hope you enjoy them too.
    </p>
  </div>
</div>

<div class="leading-snug space-y-4 layout-md">
  {#each ctfEvents as ctf}
    <div class="p-4 rounded-lg transition-shadow duration-200">
      <h2 class="text-2xl text-[#DAA520] mb-2">{ctf.name}</h2>
      <hr class="border-[#BBBBBB] mb-4" />
      <div class="space-y-2">
        <p>{ctf.desc}</p>
        {#each ctf.challenges as challenge}
          <div class="project-pair">
            <a href={challenge.href} target="_blank">
              <div class="text-[#BBBBBB] font-medium hover:text-[#DAA520]">
                {challenge.name}
                <span class="text-[#DAA520]">({challenge.category})</span>
                <ArrowUpRight size={18} class="inline text-[#DAA520]" />
              </div>
            </a>
            <p class="text-[#BBBBBB]">{challenge.desc}</p>
            {#if challenge.writeup}
              <aside>
                <a
                  href={challenge.writeup}
                  target="_blank"
                  class="cursor-pointer hover:text-[#DAA520]"
                  >Writeup <Link size={14} class="inline" /></a
                >
              </aside>
            {/if}
          </div>
        {/each}
      </div>
    </div>
  {/each}
</div>

<style lang="postcss">
  .g {
    @apply text-neutral-400;
  }

  .project-pair {
    @apply grid sm:grid-cols-[1fr,2fr] gap-y-1 -mx-3 px-3 py-2 transition-colors;
  }

  aside {
    @apply mt-0.5 text-base text-neutral-500;
  }

  /* Correction for vertical navigation links on mobile. */
  @media (max-width: 420px) {
    #intro {
      @apply -mt-10;
    }
  }
</style>
