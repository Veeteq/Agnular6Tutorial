export class Address {
    street: string;
    number: string;
    zipCode: string;
    city: string;

    toString(): string {
        return this.zipCode + ' ' + this.city + ', ' + this.street + ' ' + this.number;
    }
}