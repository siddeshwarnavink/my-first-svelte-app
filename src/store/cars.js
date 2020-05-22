import { writable } from 'svelte/store';
import carData from './initData';

const carList = writable(carData);

const addCar = car => carList.update(cars => [car, ...cars]);

const editCar = newCar => carList.update(cars => cars.map(c => {
    if (c.id == newCar.id) {
        return newCar;
    }
    return c;
}));

const deleteCar = carId => carList.update(cars => cars.filter(({ id }) => id != carId));

export { deleteCar, editCar, addCar, carList };