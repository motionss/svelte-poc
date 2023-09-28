<script>
  import '../app.css'
  import HeaderButton from './HeaderButton.svelte'
</script>

<header class="py-8 px-4">
  <h1 class="text-3xl font-bold text-center">To-Do List 📝</h1>
  <p class="mt-2 text-sm text-zinc-400 font-light text-center">Astro & Svelte Proof of Concept</p>
  <nav class="mt-4 flex flex-col lg:flex-row gap-4">
    <HeaderButton href="/">Inicio</HeaderButton>
    <HeaderButton href="/info">Info</HeaderButton>
  </nav>
</header>
<main class="px-4">
  <slot />
</main>
