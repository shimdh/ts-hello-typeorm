const Users = [
    {
        id: 1,
        name: "Luke Cage",
        // tslint:disable-next-line:object-literal-sort-keys
        aliases: [
            "Carl Lucas",
            "Power Man",
            "Mr. Bulletproof",
            "Hero for Hire",
        ],
        occupation: "bartender",
        gender: "male",
        height: {
            ft: 6,
            in: 3,
        },
        hair: "bald",
        eyes: "brown",
        powers: [
            "strength",
            "durability",
            "healing",
        ],
    },
    {
        id: 2,
        name: "Spider-Man",
        // tslint:disable-next-line:object-literal-sort-keys
        aliases: [
            "Dr. Peter Benjamin Parker",
            "Spidey",
            "Web-Sligner",
            "Spider-X-Man",
        ],
        occupation: "scientist",
        gender: "male",
        height: {
            ft: 5,
            in: 10,
        },
        hair: "brown",
        eyes: "hazel",
        powers: [
            "wall-crawling",
            "strength",
            "speed",
            "stamina",
            "durability",
            "agility",
            "healing",
            "reflexes",
            "Spider-Sense",
            "genius",
        ],
    },
    {
        id: 3,
        name: "Captain America",
        // tslint:disable-next-line:object-literal-sort-keys
        aliases: [
            "Winghead",
            "Shield-Slinger",
            "the Captain",
            "Cap",
            "Yeoman America",
            "Sentinel of Liberty",
            "The Living Legend",
        ],
        occupation: "special agent",
        gender: "male",
        height: {
            ft: 6,
            in: 2,
        },
        hair: "blonde",
        eyes: "blue",
        powers: [
            "strength",
            "speed",
            "durability",
            "agility",
            "reflexes",
            "stamina",
            "healing",
            "longevity",
        ],
    },
    {
        id: 4,
        name: "Iron Man",
        // tslint:disable-next-line:object-literal-sort-keys
        aliases: [
            "Tony Stark",
            "Golden Gladiator",
            "Spare Parts Man",
            "Space-Knight",
        ],
        occupation: "inventor",
        gender: "male",
        height: {
            ft: 6,
            in: 1,
        },
        hair: "black",
        eyes: "blue",
        powers: [],
    },
    {
        id: 5,
        name: "Wolverine",
        // tslint:disable-next-line:object-literal-sort-keys
        aliases: [
            "Logan",
            "Weapon X",
            "Death",
            "Agent Ten",
            "Fist of Legend",
        ],
        occupation: "special agent",
        gender: "male",
        height: {
            ft: 5,
            in: 3,
        },
        hair: "black",
        eyes: "blue",
        powers: [
            "healing",
            "acute senses",
            "strength",
            "speed",
            "durability",
            "agility",
            "stamina",
            "weather adaptation",
            "animal empathy",
            "bone claws",
        ],
    },
];

import { NextFunction, Request, Response, Router } from "express";

export class UserRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    public getAll(req: Request, res: Response, next: NextFunction) {
        res.send(Users);
    }

    public getOne(req: Request, res: Response, next: NextFunction) {
        // tslint:disable-next-line:radix
        const query = parseInt(req.params.id);
        // tslint:disable-next-line:no-shadowed-variable
        const user = Users.find((user: any) => user.id === query);
        if (user) {
            res.status(200)
                .send({
                    message: "Success",
                    status: res.status,
                    user,
                });
        } else {
            res.status(404)
                .send({
                    message: "No user found with the given id.",
                    status: res.status,
                });
        }
    }

    public init() {
        this.router.get("/", this.getAll);
        this.router.get("/:id", this.getOne);
    }

}

const userRoutes = new UserRouter();
userRoutes.init();

export default userRoutes.router;
