<script>
  export let title;
  export let speed;
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

  .car_item .car_item__action button:hover {
    background-color: #031eb5;
    cursor: pointer;
  }
</style>

<div class="car_item">
  <div class="car_item__texts">
    <span class="car_item--title">{title}</span>
    <span class="car_item--speed">Speed: {speed}</span>
  </div>

  <div class="car_item__action">
    <button>Edit</button>
    <button>Save</button>
    <button>Delete</button>
  </div>
</div>
