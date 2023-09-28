<script lang="ts">
  export let href: string
</script>

<a
  class="flex-1 py-2 text-center border-2 border-white rounded-lg
      hover:bg-white hover:text-black transition-colors"
  {href}
>
  <slot />
</a>
