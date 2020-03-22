export class Thing{

    url;
    name;
    count;
    spacereq;

    constructor(url: String, name: String, spacereq:Number, count: Number=0){
        this.url = url;
        this.name = name;
        this.count = count;
        this.spacereq=spacereq;
    }
}