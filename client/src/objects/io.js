import { doc,setDoc, addDoc,collection,serverTimestamp } from "firebase/firestore"; 


export class IO {
    constructor(db) {
        this.db = db
        this.doc=null
    }

    to(doc){
        this.doc=doc
        return this
    }

    async emit(name, data,extend){
        const cityRef = doc(this.db, this.doc, extend);
        setDoc(cityRef, { events: {
            name: name,
            data: data,
            time: serverTimestamp()
        } }, { merge: true });
    }
}