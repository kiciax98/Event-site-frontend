import { User } from "./user";

export class Quiz {
    
    constructor(id: number, title: string, description: string, participants: User, startDate: Date, endDate: Date, image: string){
        this.id = id;
        this.title = title;
        this.description = description;
        this.participants = participants;
        this.startDate = startDate;
        this.endDate = endDate;
        this.image = image;
    };

    id: number;
    title: string;
    description: string;
    participants: User;
    startDate: Date;
    endDate: Date;
    image: string;
}