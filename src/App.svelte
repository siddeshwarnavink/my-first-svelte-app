<script>
  import Header from "./TheHeader.svelte";

  export let name;
</script>

<style>
  .content {
    padding: 10px;
  }
</style>

<main>
  <Header />

  <div class="content">
    <h1>Hello {name}!</h1>
    <p>
      Visit the
      <a href="https://svelte.dev/tutorial">Svelte tutorial</a>
      to learn how to build Svelte apps.
    </p>
  </div>
</main>
