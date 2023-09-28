import type { Cookies } from '@sveltejs/kit'
export function load({ cookies }: { cookies: Cookies }) {
  const todos = cookies.get('todos')
  return {
    todos: todos ? JSON.parse(todos) : [],
  }
}
