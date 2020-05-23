import { writable } from 'svelte/store';

const carList = writable([]);

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

const addCar = car => carList.update(cars => [car, ...cars]);

const editCar = newCar => carList.update(cars => cars.map(c => {
    if (c.id == newCar.id) {
        return newCar;
    }
    return c;
}));

const deleteCar = carId => carList.update(cars => cars.filter(({ id }) => id != carId));

export { deleteCar, editCar, addCar, carList, fetchCars };