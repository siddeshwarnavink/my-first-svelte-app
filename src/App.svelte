<script>
  import { onMount } from "svelte";

  import Header from "./TheHeader.svelte";
  import CarItem from "./CarItem.svelte";
  import NewCar from "./NewCar.svelte";
  import { carList, fetchCars } from "./store/cars.js";

  let data;

  // onMount(() => {
  //   fetchCars();
  // });

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
    {#await fetchCars()}
      <p>Loading...</p>
    {:then _}
      <section>
        {#each data as carData}
          <CarItem {...carData} />
        {/each}
      </section>
    {/await}
  </div>
</main>
