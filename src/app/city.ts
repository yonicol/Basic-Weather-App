export class City {
    readonly name:string;
    readonly country:string;
    readonly description:string;
    readonly temp:number;
    readonly img:string;
    constructor(cityname:string, country:string, description:string, temp:number, img:string){
        this.name = cityname;
        this.country = country;
        this.description = description;
        this.temp = temp;
        this.img = img;
    }
}
