<script>
  let titleField = "";
  let speedField = 0;

  const newCarAddHandler = () => {
    console.log("New Car!", { titleField, speedField });
  };
</script>

<style>
  .new_car {
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #333;
    margin-bottom: 12px;
  }

  .new_car .new_car--title {
    font-size: 24px;
    display: block;
    padding: 10px 0px;
  }

  .new_car .new_car--formfield label {
    font-weight: bold;
  }

  .new_car .new_car--formfield input {
    display: block;
    font-size: 16px;
    padding: 2px 1px;
    margin-bottom: 10px;
  }

  .new_car button {
    border: 0;
    background-color: transparent;
    text-transform: uppercase;
    outline: 0;
    cursor: pointer;
    color: #304ffe;
    font-weight: bold;
  }
</style>

<div class="new_car">
  <span class="new_car--title">Add new car</span>
  <div class="new_car--formfield">
    <label for="titleField">Title:</label>
    <input
      type="text"
      name="title"
      id="titleField"
      bind:value={titleField}
      placeholder="e.g: Race Car" />
  </div>

  <div class="new_car--formfield">
    <label for="titleField">Speed:</label>
    <input
      type="number"
      bind:value={speedField}
      min="0"
      name="title"
      id="titleField"
      placeholder="e.g: 550" />
  </div>

  <button on:click|once={newCarAddHandler}>Add car</button>
</div>
