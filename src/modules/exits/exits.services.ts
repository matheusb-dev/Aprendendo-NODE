/*Regra de negocios*/

import { v4 as uuid } from "uuid";
import { Exit } from "./types";


export class ExitsService{

   
    exits: Exit[] = [];

    create(userId: string){ /*por ser public não precisa do "public, apenas o nome create"*/

        const exit = {
            id: uuid(),
            createAt: new Date(),
            userId,
        };

        this.exits.push(exit);
        return exit;
    }

    getAll(){
        return this.exits;
    }
}