import { writable } from 'svelte/store';
import carData from './initData';

export const carList = writable(carData);