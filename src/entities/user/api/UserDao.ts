import type { UserType } from "./model/UserType";

export default class UserDao {

 static authenticate(login: string, password: string): Promise<UserType|null> {
    return new Promise ((resolve, _)=>{
        setTimeout(
            () => {
                if(login == "user" && password == "123") {
                    resolve({
                    name: "Пацік на моціке", 
                    email: "user@i.ua",
                    login: "user",
                    imageUrl: "/public/img/gosl.png",
                    address: "Одеса, Садова 3",
                    dob: "08 грудня 2025"

                    });
                }
                else
                    resolve(null);
                
                
            },
            700,
        )
    });
    
 }  
}

