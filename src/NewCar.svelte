<script>
  import { addCar } from "./store/cars.js";
  // import { createEventDispatcher } from "svelte";
  import { createFieldValidator } from "./helpers/validation.js";
  import {
    requiredValidator,
    validSpeedValidator
  } from "./helpers/validators.js";

  // const dispatch = createEventDispatcher();
  let titleField = "";
  let speedField = 0;

  let validateTitle = false;
  const [titleValidity, titleValidate] = createFieldValidator(
    requiredValidator()
  );

  let validateSpeed = false;
  const [speedValidity, speedValidate] = createFieldValidator(
    validSpeedValidator()
  );

  const newCarAddHandler = () => {
    // dispatch("add", { title: titleField, speed: speedField });
    addCar({ id: Date.now().toString(), title: titleField, speed: speedField });
    titleField = "";
    speedField = 0;
    validateTitle = false;
    validateSpeed = false;
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

  .new_car button:disabled {
    color: #333;
  }

  /* VALIDATION STYLE */

  .validation-hint {
    color: red;
    padding: 6px 0;
  }

  .field-danger {
    border-color: red;
  }

  .field-success {
    border-color: green;
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
      on:focus|once={() => (validateTitle = true)}
      bind:value={titleField}
      class:field-danger={validateTitle && !$titleValidity.valid}
      class:field-success={$titleValidity.valid}
      placeholder="e.g: Race Car"
      use:titleValidate={titleField} />

    {#if validateTitle && $titleValidity.dirty && !$titleValidity.valid}
      <span class="validation-hint">
        {$titleValidity.message} {$titleValidity.dirty}
      </span>
    {/if}
  </div>

  <div class="new_car--formfield">
    <label for="titleField">Speed:</label>
    <input
      type="number"
      bind:value={speedField}
      min="0"
      name="title"
      id="titleField"
      placeholder="e.g: 550"
      on:focus|once={() => (validateSpeed = true)}
      class:field-danger={validateSpeed && !$speedValidity.valid}
      class:field-success={$speedValidity.valid}
      use:speedValidate={speedField} />

    {#if validateSpeed && $speedValidity.dirty && !$speedValidity.valid}
      <span class="validation-hint">
        {$speedValidity.message} {$speedValidity.dirty}
      </span>
    {/if}
  </div>

  <button
    disabled={!$titleValidity.valid && !$speedValidity.valid}
    on:click={newCarAddHandler}>
    Add car
  </button>
</div>
