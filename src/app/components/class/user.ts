export class User {
    
    constructor(id: number, name: string, email: string){
        this.id = id;
        this.name = name;
        this.email = email;
    };

    id: number;
    name: string;
    email: string;
}