import express, {type Express } from "express";

export class App{

    private server: Express;

    constructor(){
        this.server = express();
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