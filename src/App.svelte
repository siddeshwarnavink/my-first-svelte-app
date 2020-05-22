<script>
  import Header from "./TheHeader.svelte";
  import CarItem from "./CarItem.svelte";
  import NewCar from "./NewCar.svelte";
  import { carList } from "./store/cars.js";

  let data;

  carList.subscribe(cars => (data = cars));
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
    <section>
      {#each data as carData}
        <CarItem {...carData} />
      {/each}
    </section>
  </div>
</main>
