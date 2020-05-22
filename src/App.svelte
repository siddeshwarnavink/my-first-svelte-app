<script>
  import data from './initData.js';
  import Header from "./TheHeader.svelte";
  import CarItem from "./CarItem.svelte";
  import NewCar from './NewCar.svelte'
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
    <NewCar />
    {#each data as carData}
      <CarItem {...carData} />
    {/each}
  </div>
</main>
