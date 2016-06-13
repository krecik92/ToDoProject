/*global Firebase*/
export default class HomeController {
    constructor($scope, $firebaseArray) {
        this.ref = new Firebase("https://todolist-5ecf4.firebaseio.com/");
        this.items = $firebaseArray(this.ref);
        console.log("Connected to Firebase");
    }
    addItem(){
        console.log("Adding Task");
        this.items.$add({
            contents: this.contents,
            email: this.email,
            status: "active"
        }).then(function(ref){
            var id = ref.key();
            console.log("Added Task" + id);
            
        });
    }
}