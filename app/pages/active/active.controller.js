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
    doneAllItems(){
        var i;
        for(i=0; i<this.items.length; i++){
            if(this.items[i].status == false){
                var taskToUpdate = new Firebase("https://todolist-5ecf4.firebaseio.com/"+this.items[i].$id);
                taskToUpdate.update({ status: true});
            }
        }
    }
    changeStatusClick(item){
        console.log("Click on panel");
        var taskToUpdate = new Firebase("https://todolist-5ecf4.firebaseio.com/"+item.$id);
        taskToUpdate.update({ status: true});
    }
}