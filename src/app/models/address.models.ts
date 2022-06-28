export class Address{
    streetName:string;
    zipCode:number;
    city:string;
    constructor(streetName:string, zipCode:number, city:string){
        this.streetName = streetName;
        this.zipCode = zipCode;
        this.city = city;
    }
}