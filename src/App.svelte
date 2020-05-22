<script>
  import initData from "./initData.js";
  import Header from "./TheHeader.svelte";
  import CarItem from "./CarItem.svelte";
  import NewCar from "./NewCar.svelte";

  let data = [...initData];

  const addCarHandler = event => {
    const carId = Date.now().toString();
    const carTitle = event.detail.title;
    const carSpeed = event.detail.speed;

    const newCar = {
      id: carId,
      title: carTitle,
      speed: carSpeed
    };

    // NOTE: useing array.push() won`t work!
    data = [newCar, ...data];
  };

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
    <NewCar on:add={addCarHandler} />
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
