<script>
  import Header from "./TheHeader.svelte";
  import CarItem from "./CarItem.svelte";
</script>

<style>
  .content {
    padding: 10px;
  }
</style>

<main>
  <Header />

  <div class="content">
    <CarItem title="Audi" speed={100} />
    <CarItem title="Toy Car" speed={10} />
  </div>
</main>
