<script lang="ts">
  export let data: { todos: ToDo[] }

  const todos = data.todos
</script>

<h2 class="mb-2">All To-Do's ({todos.length})</h2>
<div class="w-full flex flex-col gap-2">
  {#each todos as todo}
    <div
      class="w-full py-2 px-4 {todo.status === 'pending'
        ? 'bg-yellow-600'
        : todo.status === 'inProgress'
        ? 'bg-blue-600'
        : 'bg-green-600'} flex gap-2 border-2 rounded-lg"
    >
      <a href="/todo/{todo.id}" class="flex-1 text-start">{todo.description}</a>
      <button
        class="w-20 capitalize text-end font-bold {todo.status === 'pending'
          ? 'text-yellow-200'
          : todo.status === 'inProgress'
          ? 'text-blue-200'
          : 'text-green-200'}"
      >
        {todo.status}
      </button>
      <button type="button" class="font-bold">X</button>
    </div>
  {/each}
</div>
