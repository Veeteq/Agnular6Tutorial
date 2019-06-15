import { Address } from './address.model';

export class User {
    name: string;
    title: string;
    address: Address;
    phones: string[];

    constructor(_name: string) {
        this.name = _name;
    }
}