import { Thing } from './thing';

export class Room{

    name;
    area;
    things: Thing[];

    constructor(name, things: Thing[],area=0){
        this.name = name;
        this.things = things;
        this.area = area;
    }
}