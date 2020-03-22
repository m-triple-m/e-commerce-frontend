export class Options {
    static count={
        options:[]
    }

    static often = [
            { img: '/assets/regularly.png', name: 'Serveral times a Week' },
            { img: '/assets/occasionally.png', name: 'Serveral times a Month' },
            { img: '/assets/rarely.png', name: 'Rarely' },
        ]


    static Renovating = {
        name: 'I am Renovating',
        name2:'Which rooms are you Renovating ?',
        img: '/assets/renovating.png',
        options: [
            { img: "/assets/kitchen.png", count: 0, name: 'Kitchen',areareq:25 },
            { img: "/assets/bedroom.png", count: 0, name: 'Bathroom' ,areareq:10},
            { img: "/assets/bathroom.png", count: 0, name: 'Bedroom' ,areareq:20},
            { img: "/assets/living-room.png", count: 0, name: 'Living Room' ,areareq:40}
        ]
    }

    static moving = {
        name: 'I am Moving',
        name2:'How big is your house ?',
        img: '/assets/move.png',
        options: [
            { img: '/assets/studio-flat.png', name: 'Studio Flat',areareq:40 , options : Options.often},
            { img: '/assets/1-bedroom.png', name: '1-2 Bedroom House',areareq:65 , options : Options.often},
            { img: '/assets/2-bedroom.png', name: '2-3 Bedroom House' ,areareq:100, options : Options.often},
            { img: '/assets/4-bedroom.png', name: '4-5 Bedroom House',areareq:130 , options : Options.often},
            { img: '/assets/large-house.png', name: 'Larger than 5 Bedroom',areareq:180 , options : Options.often}
        ]
    }

    static enoughspace = {
        name: "I don't have enough space at home",
        name2:'How much stuff do you need to store ?',
        img: '/assets/not-enough-space.png',
        options: [
            { img: '/assets/box.png', name: 'Box', count: 0 ,areareq:20},
            { img: '/assets/mini-van.png', name: 'Mini Van', count: 0,areareq:20 },
            { img: '/assets/medium-van.png', name: 'Medium Van', count: 0,areareq:35 },
            { img: '/assets/large-van.png', name: 'Large Van', count: 0,areareq:50 }
        ]
    }
    static someStuff = {
        name: "Some of my stuff",
        name2:'What do you need to store?',
        img: '/assets/some-stuff.png',
        options: [
            { img: 'assets/image.png', name: 'Box', count: 0 ,areareq:20},
            { img: 'assets/image.png', name: 'Mini Van', count: 0,areareq:20 },
            { img: 'assets/image.png', name: 'Medium Van', count: 0,areareq:35 },
            { img: 'assets/image.png', name: 'Large Van', count: 0,areareq:50 }
        ]
    }

    static content = {
        name: "The Content of my house",
        name2:'How big is your house?',
        img: '/assets/personal.png',
        options: [
            { img: 'assets/image.png', name: 'Studio Flat' , options : Options.often},
            { img: 'assets/image.png', name: '1-2 bedroom flat' , options : Options.often},
            { img: 'assets/image.png', name: '2-3 bedroom flat' , options : Options.often},
            { img: 'assets/image.png', name: '4-5 bedroom flat' , options : Options.often},
            { img: 'assets/image.png', name: 'Larger than 5 bedroom' , options : Options.often}
        ]
    }

    static overseas = {
        name: "I am moving overseas",
        name2:'What do you need to store?',
        img: '/assets/expat.png',
        options: [
            Options.someStuff,
            Options.content
        ]
    }
    static student={
        name:"I am student",
        name2:"How much stuff do you need to store?",
        img:'/assets/student.png',
        options:[
            {img:"/assets/box.png",name:"Box",count:0},
            {img:"/assets/mini-van.png",name:"Mini Van",count:0}
        ]
    }
    static archives = {
        img:"/assets/archive.png",
        name:"I need to store my archives",
        name2:"How many boxes are you storing",
        options:[
            {img:"assets/image.png",name:"Box",count:0}
        ]
    }
    static equipments = {
        img: '/assets/equipment.png',
        name: 'I need to store my equipment',
        name2:"How large is your equipment ?",
        options: [
            { img: 'assets/image.png', name: 'Mini Van', count: 0 },
            { img: 'assets/image.png', name: 'Medium Van', count: 0 },
            { img: 'assets/image.png', name: 'Large Van', count: 0 }
        ]
    }
    static movingoffice = {
        img : "/assets/moveOffice.png",
        name:"We are moving or renovating our office",
        name2:"How many employees do you have?",
        options:[
                {img: "assets/image.png",count:0}
            ]
        }
        static options =
        [
            {
                img: "/assets/personal.png",
                name: 'Personal',
                increment: 0,
                options: [Options.moving, Options.Renovating, Options.enoughspace, Options.overseas, Options.student]
            },
            {

                img: "/assets/business.png",
                name: 'Business',
                increment: 20,
                options: [Options.archives,Options.equipments,Options.movingoffice]

            }
        ]


}