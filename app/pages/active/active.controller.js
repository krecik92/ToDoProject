/*global Firebase*/
export default class ActiveController {
     constructor($firebaseArray) {
        this.ref = new Firebase("https://todolist-5ecf4.firebaseio.com/");
        this.items = $firebaseArray(this.ref);
        console.log("Connected to Firebase");
    }
    removeItem(item){
        this.items.$remove(item);
    }
    changeStatusClick(item){
        console.log("Click on panel");
        var taskToUpdate = new Firebase("https://todolist-5ecf4.firebaseio.com/"+item.$id);
        taskToUpdate.update({ status: "inactive"});
    }
}