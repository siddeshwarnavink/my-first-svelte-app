<script>
  import Header from "./TheHeader.svelte";
  import CarItem from "./CarItem.svelte";
</script>

<style>
  .content {
    max-width: 500px;
    margin: auto;
    margin-top: 2em;
  }
</style>

<main>
  <Header />

  <div class="content">
    <CarItem title="Audi" speed={100} />
    <CarItem title="Toy Car" speed={10} />
  </div>
</main>
