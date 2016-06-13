/*global Firebase*/
export default class CompletedController {
      constructor($firebaseArray) {
        this.ref = new Firebase("https://todolist-5ecf4.firebaseio.com/");
        this.items = $firebaseArray(this.ref);
        console.log("Connected to Firebase");
    }
    showInactiveTaskContents(item){
        if(item.status == "inactive"){
            return item.contents;
        }
    }
    showInactiveTaskEmail(item){
        if(item.status == "inactive"){
            return item.email;
        }
    }
    showInactiveTaskStatus(item){
        if(item.status == "inactive"){
            return item.status;
        }
    }
     removeItem(item){
        this.items.$remove(item);
    }
}