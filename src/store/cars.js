import { writable } from 'svelte/store';
import carData from './initData';

export const carList = writable(carData);

export const addCar = car => carList.update(cars => [car, ...cars]);

export const editCar = newCar => carList.update(cars => cars.map(c => {
    if (c.id == newCar.id) {
        return newCar;
    }
    return c;
}));