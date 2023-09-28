<script lang="ts">
  import { page } from '$app/stores'
  export let data

  const todo: ToDo = data.todos.find((item: ToDo) => item.id === +$page.params.id)
</script>

<p>ID: {todo.id}</p>
<p>Description: {todo.description}</p>
<p>Status: <span class="capitalize font-bold">{todo.status}</span></p>
