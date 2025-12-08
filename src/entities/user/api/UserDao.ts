import type { UserType } from "./model/UserType";

export default class UserDao {

 static authenticate(login: string, password: string): Promise<UserType|null> {
    return new Promise ((resolve, _)=>{
        setTimeout(
            () => {
                if(login == "user" && password == "123") {
                    resolve({
                    name: "User", 
                    password: "123", 
                    email: "user@i.ua"

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

