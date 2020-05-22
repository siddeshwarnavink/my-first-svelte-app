<script>
  import Header from "./TheHeader.svelte";
  import CarItem from "./CarItem.svelte";
  import NewCar from "./NewCar.svelte";
  import { carList } from "./store/cars.js";

  let data;

  carList.subscribe(cars => {
    console.log(cars);

    data = cars;
  });

  const editCarHandler = event => {
    const carId = event.detail.id;
    const carTitle = event.detail.title;
    const carSpeed = event.detail.speed;

    data = data.map(carData => {
      if (carData.id == carId) {
        return {
          id: carId,
          title: carTitle,
          speed: carSpeed
        };
      }

      return carData;
    });
  };

  const deleteCarHandler = event => {
    const carId = event.detail.id;

    data = data.filter(({ id }) => carId != id);
  };
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
        <CarItem
          {...carData}
          on:edit={editCarHandler}
          on:delete={deleteCarHandler} />
      {/each}
    </section>
  </div>
</main>
