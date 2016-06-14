/*global Firebase*/
export default class CompletedController {
      constructor($firebaseArray) {
        this.ref = new Firebase("https://todolist-5ecf4.firebaseio.com/");
        this.items = $firebaseArray(this.ref);
        console.log("Connected to Firebase");
    }
     removeItem(item){
        this.items.$remove(item);
    }
    removeAllItems(){
        var i;
        for(i=0; i<this.items.length; i++){
            if(this.items[i].status){
                this.items.$remove(this.items[i]);
            }
        }
    }
}