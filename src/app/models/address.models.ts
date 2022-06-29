export class Address{
    streetName:string | null;
    zipCode:number | null;
    city:string | null;
    constructor(streetName:string, zipCode:number, city:string){
        this.streetName = streetName;
        this.zipCode = zipCode;
        this.city = city;
    }

    
}