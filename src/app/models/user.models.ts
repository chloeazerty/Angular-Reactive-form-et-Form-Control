export class User{
    username:string | null;
    email:string | null;
    password:string | null;

    constructor(username:string, email:string, password:string){
        this.username = username;
        this.email = email;
        this.password = password;
    }
}