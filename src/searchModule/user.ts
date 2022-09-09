export class User {
    constructor(first: string, last: string, email: string, phone: string) {
        this.name.first = first,
            this.name.last = last,
            this.email = email,
            this.phone = phone
    }
    name: { first: string, last: string } = {
        first: "",
        last: ""
    };

    email: string;
    phone: string;

}