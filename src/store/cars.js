import { writable } from 'svelte/store';

const carList = writable([]);

// Helper Function
const optimisticallyUpdate = (updateCallback) => {
    const oldCarList = carList;

    updateCallback();

    // Performing optimistic update
    fetch('https://api.jsonbin.io/b/5ec88819e91d1e45d10fa2d5', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'secret-key': '$2b$10$M2d8feAXLHKRTQsA6oy43O.YwacaoHtAGx72UBT69Cd4ETI4F0rWy'
        },
        body: JSON.stringify({ "cars": carList })
    }).catch((err) => {
        console.log(err);
        carList.set(oldCarList);
    });
}

const fetchCars = async () => {
    const res = await fetch('https://api.jsonbin.io/b/5ec88819e91d1e45d10fa2d5', {
        headers: {
            'secret-key': '$2b$10$M2d8feAXLHKRTQsA6oy43O.YwacaoHtAGx72UBT69Cd4ETI4F0rWy'
        }
    });
    const data = await res.json();
    const loadedCars = data.cars
    carList.set(loadedCars);
}

const addCar = car => optimisticallyUpdate(() => carList.update(cars => [car, ...cars]));

const editCar = newCar => optimisticallyUpdate(() => carList.update(cars => cars.map(c => {
    if (c.id == newCar.id) {
        return newCar;
    }
    return c;
})));

const deleteCar = carId => optimisticallyUpdate(() => carList.update(cars => cars.filter(({ id }) => id != carId)));

export { deleteCar, editCar, addCar, carList, fetchCars };