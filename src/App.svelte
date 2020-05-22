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
        <CarItem {...carData} />
      {/each}
    </section>
  </div>
</main>
