import { Router } from "express";

interface Exit{
    id: string;
    userID: string;
    createAt: Date;
}

export class ExitsModules{

    router: Router;

    exits = [];

    constructor(){
        this.router = Router();


    }
}