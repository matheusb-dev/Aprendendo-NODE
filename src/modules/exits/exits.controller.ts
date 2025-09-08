import { type Request, type Response } from "express";
import { v4 as uuid } from "uuid";
import { Exit } from "./types";
import { ExitsService } from "./exits.services";


export class ExitsController{


    constructor(private readonly /*Transforma isso numa class instanciada*/exitsService: ExitsService) {



    }
    
    create(request: Request, response: Response){
        const { userId } = request.body;

        const result = this.exitsService.create(userId);
        response.status(201).json(result);

        
    }
    getAll(_: Request, response: Response){
        const result =  this.exitsService.getAll();
        response.status(200).json(result);
    }
}