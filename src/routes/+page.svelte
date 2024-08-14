<script lang="ts">
  import { ArrowUpRight } from "lucide-svelte";
  import Seo from "$lib/components/Seo.svelte";
  import { featuredProjects } from "$lib/projects";
</script>

<Seo
  title="Jax Dunfee"
  description="Jax Dunfee · Cyber Security Engineer & Security Researcher based in the United States"
/>

<p
  class="layout-md text-xl leading-tight font-light mb-6 text-[#DAA520]"
  id="intro"
>
  <span class="g">enjoys </span> ctfs <span class="g">&</span> climbing
</p>

<div class="layout-md text-lg space-y-5">
  <p>
    Hey there, I'm Jax. I'm a full time <span class="underline-orange">
      Vulnerability Researcher</span
    >
    who does <span class="underline-orange"> CTFs</span> and
    <span class="underline-orange">Security Research</span> on the side.
  </p>
  <div>
    <p>
      As an avid CTFer, I specialize in the <span class="underline-green"
        >web</span
      >
      and <span class="underline-green">pwn</span> categories. My passion lies
      at the crossroads of the two realms of exploitation, particularly in the
      domain of browser exploitation. You can find my numerous write-ups on my
      <span class="underline-red"
        ><a
          href="https://jax.dev/blog"
          target="_blank"
          class="hover:text-[#f36170]">blog</a
        ></span
      >.
    </p>
  </div>
  <p>
    Based in <span class="underline-orange"> Washington D.C.</span> area, you
    might catch me immersing myself in a good book, rock climbing, or perfecting
    the art of espresso.<br />
  </p>

  <div class="leading-snug space-y-4">
    <p>Check out some of my projects:</p>
    {#each featuredProjects as project}
      <a class="project-pair" href={project.href} target="_blank">
        <div class="text-[#BBBBBB] font-medium hover:text-[#DAA520]">
          {project.name}
          <ArrowUpRight size={18} class="inline text-[#DAA520]" />
        </div>
        <div>
          <p>{project.desc}</p>
          {#if project.aside}
            <aside>{project.aside}</aside>
          {/if}
        </div>
      </a>
    {/each}
  </div>
</div>

<style lang="postcss">
  .g {
    @apply text-neutral-400;
  }

  .project-pair {
    @apply grid sm:grid-cols-[1fr,2fr] gap-y-1 -mx-3 px-3 py-2 hover:bg-neutral-600 transition-colors;
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
