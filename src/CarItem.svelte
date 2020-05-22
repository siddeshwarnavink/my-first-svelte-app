<script>
  // import { createEventDispatcher } from "svelte";
  import { editCar } from "./store/cars.js";

  export let id;
  export let title;
  export let speed;

  // const dispatch = createEventDispatcher();
  let isEditMode = false;
  let editTitle = title;
  let editSpeed = speed;

  const toggleEditModeHandler = () => {
    isEditMode = !isEditMode;
    editTitle = title;
    editSpeed = speed;
  };

  const onSaveHandler = () => {
    // dispatch("edit", {
    //   id,
    //   title: editTitle,
    //   speed: editSpeed
    // });
    editCar({
      id,
      title: editTitle,
      speed: editSpeed
    });
    toggleEditModeHandler();
  };

  const onDeleteHandler = () => {
    dispatch("delete", {
      id
    });
  };
</script>

<style>
  .car_item {
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #333;
    margin-bottom: 12px;
  }

  .car_item .car_item--title {
    font-size: 21px;
    display: block;
  }

  .car_item .car_item__action {
    margin-top: 10px;
  }

  .car_item .car_item__action button {
    background-color: #304ffe;
    color: #fff;
    border: 0;
    font-size: 14px;
    padding: 5px 12px;
    border: 1px solid #000;
    border-radius: 10px;
    outline: 0;
    margin-right: 5px;
  }

  .car_item .car_item__editForm input {
    display: block;
    margin-bottom: 10px;
    padding: 2px 1px;
  }

  .car_item .car_item__action button:hover {
    background-color: #031eb5;
    cursor: pointer;
  }

  .car_item .car_item__action button.flat {
    text-transform: uppercase;
    border: 0;
    background-color: transparent;
    font-weight: bold;
    color: #304ffe;
  }
</style>

<div class="car_item">
  <div class="car_item__texts">
    {#if !isEditMode}
      <span class="car_item--title">{title}</span>
      <span class="car_item--speed">Speed: {speed}</span>
    {:else}
      <div class="car_item__editForm">
        <input bind:value={editTitle} placeholder="Title" type="text" />
        <input bind:value={editSpeed} placeholder="Speed" type="number" />
      </div>
    {/if}
  </div>

  <div class="car_item__action">
    {#if isEditMode}
      <button on:click|once={onSaveHandler}>Save</button>
      <button class="flat" on:click={toggleEditModeHandler}>Cancel</button>
    {:else}
      <button on:click={toggleEditModeHandler}>Edit</button>
      <button on:click={onDeleteHandler}>Delete</button>
    {/if}
  </div>
</div>
