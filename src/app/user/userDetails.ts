export class userDetails{
    id:number
    name:string
    email:string
    contact:number
    address:string
    constructor(id:number,name:string ="",email:string ="",contact:number,address:string =""){
        this.id = id
        this.name = name
        this.email =email
        this.contact = contact
        this.address = address
    }

}