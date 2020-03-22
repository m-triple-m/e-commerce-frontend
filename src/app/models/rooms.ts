import { Room } from './room';
import { Thing } from './thing';

export class AllRooms {
    livingRoom: Room = new Room("Living Room", [
        new Thing('assets/ssofa.jpg', 'Armchair', 5),
        new Thing('assets/2sofa.jpg', '2-Seater Sofa', 8),
        new Thing('assets/3sofa.jpg', '3-Seater Sofa', 10),
        new Thing('assets/4sofa.jpg', '4-Seater Sofa', 12),
        new Thing('assets/cornsofa.jpg', 'Corner Sofa', 18),
        new Thing('assets/chaise.jpg', 'Chaise Lounge', 7),
        new Thing('assets/foostool.jpg', 'Footstool', 10),
        new Thing('assets/coffeetab.jpg', 'Coffee Table', 3),
        new Thing('assets/sidetab.jpg', 'Side Table', 1),
        new Thing('assets/bookcase.jpg', 'Bookcase', 3),
        new Thing('assets/tvcab.jpg', 'Tv Cabinet', 12),
        new Thing('assets/tvbench.jpg', 'TV Bench', 3),
        new Thing('assets/tv.jpg', 'TV', 2),
        new Thing('assets/piano.jpg', 'Piano', 13),
        new Thing('assets/rug.jpg', 'Rug', 2),
        new Thing('assets/pictureframe.jpg', 'Picture Frame', 0.5),
        new Thing('assets/plant.jpg', 'Artificial Plant', 2),
        new Thing('assets/small.jpg', 'Moving Box : Small', 0.2),
        new Thing('assets/medium.jpg', 'Moving Box : Medium', 0.5),
        new Thing('assets/large.jpg', 'Moving Box : Large', 1),
    ]);
    diningRoom: Room = new Room("Kitchen & Dining Room", [
        new Thing('assets/4table.jpg', '4 Seater Table', 15),
        new Thing('assets/8table.jfif', '8 Seater Table', 30),
        new Thing('assets/dinchair.jpg', 'chairs', 10),
        new Thing('assets/stool.jpg','Stool', 0.5),
        new Thing('assets/barstool.jpg', 'Bar Stool', 1),
        new Thing('assets/highchair.jpg', 'High Chair', 1.5),
        new Thing('assets/displaycab.jpg', 'Display Cabinet', 9),
        new Thing('assets/sideboard.jpg', 'Side Board', 4),
        new Thing('assets/fridge.jpg', 'Fridge', 4),
        new Thing('assets/freezer.jpg', 'Freezer', 9),
        new Thing('assets/oven.jpg', 'Oven', 2),
        new Thing('assets/microwave.jpg', 'Microwave', 1),
        new Thing('assets/bin.jpg', 'Bin', 0.5),
        new Thing('assets/sidetab1.jpg', 'Side Table', 2),
    ]);
    bedroom: Room = new Room("Bedroom", [
        new Thing('assets/doublebed.jpg','Double Bed',9),
        new Thing('assets/singlebed.jpg','Single Bed',5),
        new Thing('assets/doublemat.jpg','Double Mattress',9),
        new Thing('assets/singlemat.jpg','Single Mattress',5),
        new Thing('assets/2doorwar.jpg', '2 Door Wardrobe', 12.5),
        new Thing('assets/4doorwar.jpg', '4 Door Wardrobe', 24),
        new Thing('assets/bedside.jpg', 'Bed Side Table', 1),
        new Thing('assets/drawers.jpg', 'Chest of Drawers', 3),
        new Thing('assets/dressing.jpg', 'Dressing Table', 4.5),
        new Thing('assets/floorlamp.jpg', 'Floor Lamp', 1),
        new Thing('assets/mirror.jpg', 'Mirror', 0.5),
        new Thing('assets/plant.jpg', 'Artificial Plant', 2),
        new Thing('assets/small.jpg', 'Moving Box : Small', 0.2),
        new Thing('assets/medium.jpg', 'Moving Box : Medium', 0.5),
        new Thing('assets/large.jpg', 'Moving Box : Large', 1),
    ]);
    childrenRoom: Room = new Room("Children's Room", [
        new Thing('assets/changing.jpg','Changing Table',2),
        new Thing('assets/childbed.jpg','Children Bed',4),
        new Thing('assets/bunkbed.jpg','Bunk Bed',15),
        new Thing('assets/cot.jpg','Cot',3),
        new Thing('assets/childwar.jpg', 'Children Wardrobe', 3),
        new Thing('assets/drawers.jpg', 'Chest of Drawers', 1.5),
        new Thing('assets/childtab.jpg', "Children's Table", 1),
        new Thing('assets/childchair.jpg', "Children's Chair", 0.5),
        new Thing('assets/desk.jpg', 'Desk & Chair', 2),
        new Thing('assets/bookcase.jpg', 'Bookcase', 3),
        new Thing('assets/babybath.jpg', 'Baby Bath', 0.5),
        new Thing('assets/toybox.jpg', 'Toy Box', 1),
        new Thing('assets/rug.jpg', 'Rug', 1.5),
        new Thing('assets/small.jpg', 'Moving Box : Small', 0.2),
        new Thing('assets/medium.jpg', 'Moving Box : Medium', 0.5),
        new Thing('assets/large.jpg', 'Moving Box : Large', 1),
    ]);
    homeoffice: Room = new Room("Home Office", [
        new Thing('assets/officedesk.jpg','Office Desk',3),
        new Thing('assets/officechair.jpg','Office Chair',3),
        new Thing('assets/largefile.jpg','Large File Cabinet',2.5),
        new Thing('assets/filingcab.jpg','Filing Cabinet',10),
        new Thing('assets/bookcase.jpg', 'Bookcase', 3),
        new Thing('assets/shelving.jpg', 'Shelving Unit', 7),
        new Thing('assets/paperbin.jpg', 'Paper Bin', 0.2),
        new Thing('assets/frame.jpg', 'Picture Frame', 0.5),
        new Thing('assets/plant.jpg', 'Artificial Plant', 0.5),
        new Thing('assets/small.jpg', 'Moving Box : Small', 0.2),
        new Thing('assets/medium.jpg', 'Moving Box : Medium', 0.5),
        new Thing('assets/large.jpg', 'Moving Box : Large', 1),

    ]);
    laundry: Room = new Room("Laundry & Cleaning", [
        new Thing('assets/washing.jpg','Washing Machine',2),
        new Thing('assets/tumble.jpg','Tumbler Dryer',2),
        new Thing('assets/dryingrack.jpg','Drying Rack',1.5),
        new Thing('assets/ironing','Ironing Board',1),
        new Thing('assets/laundry.jpg', 'Laundry Basket', 0.5),
        new Thing('assets/linen.jpg', 'Linen Rack', 0.5),
        new Thing('assets/vaccum.jpg', 'Vaccum Cleaner', 0.5),
        new Thing('assets/small.jpg', 'Moving Box : Small', 0.2),
        new Thing('assets/medium.jpg', 'Moving Box : Medium', 0.5),
        new Thing('assets/large.jpg', 'Moving Box : Large', 1),

    ]);
    garden: Room = new Room("Garden", [
        new Thing('assets/smallgardentab.jpg', 'Garden Table', 9),
        new Thing('assets/gardenchair.jpg', 'Garden Chair', 4.5),
        new Thing('assets/gardenben.jpg', 'Garden Bench', 6),
        new Thing('assets/parasol.jpg', 'Parasol', 0.2),
        new Thing('assets/mower.jpg', 'Lawn Mower', 0.5),
        new Thing('assets/grill.jpg', 'Outdoor Grill', 1),
        new Thing('assets/adultbyc.jpg', "Adult's Bicycle", 3),
        new Thing('assets/kidbyc.jpg', "Kid's Bicycle", 2),
        new Thing('assets/tools.jpg', 'Garden Tools', 1), 
        new Thing('assets/small.jpg', 'Moving Box : Small', 0.2),
        new Thing('assets/medium.jpg', 'Moving Box : Medium', 0.5),
        new Thing('assets/large.jpg', 'Moving Box : Large', 1),

    ]);
    gardenshed: Room = new Room("Garden Shed", [
        new Thing('assets/workben.jpg','Workmen Bench',3.5),
        new Thing('assets/toolbox.jpg','Tool Box',0.5),
        new Thing('assets/ladder.jpg','Ladder',1.5),
        new Thing('assets/suitcase.jpg','Suitcase',1),
        new Thing('assets/small.jpg', 'Moving Box : Small', 0.2),
        new Thing('assets/medium.jpg', 'Moving Box : Medium', 0.5),
        new Thing('assets/large.jpg', 'Moving Box : Large', 1),

    ]);
    all_rooms = [this.livingRoom, this.diningRoom, this.bedroom, this.childrenRoom,
    this.homeoffice, this.laundry, this.garden, this.gardenshed]


    constructor() {

    }

    getAllRooms(): Array<Room> {
        console.log(this.all_rooms);
        return this.all_rooms;
    }

}
