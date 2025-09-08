import express, { type Express } from "express";
import { Routes } from "./routes";

export class App{

    private server: Express;

    constructor(){
        this.server = express();

        new Routes(this.server);
    }

    public start(){
        this.server.listen(3000, (error) => {
            
            if(error){
                console.error(error);
                return;
            }
            console.log("Server is runing on port 3000")
        });
    }
}