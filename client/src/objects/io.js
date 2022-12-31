import { doc, setDoc } from "firebase/firestore"; 


export class IO {
    constructor(db) {
        this.db = db
        this.code=null
    }

    to(code){
        this.code=code
        return this
    }

    async emit(name, data){
        await setDoc(doc(this.db, "rooms/"+this.code+"/events", (new Date()).getTime()), {
            name: name,
            data: data
          });
          
    }
}