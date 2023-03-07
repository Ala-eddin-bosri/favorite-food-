
var currentpic;



function randommeal() {
    var Rmeal = ["Tonkatsu pork", "Chinon Apple Tarts", "Chakchouka","Sushi","Fresh sardines","Croatian Bean Stew","Leblebi Soup","Big Mac","Cream Cheese Tart","Chocolate Souffle","Chicken Handi","Koshari","French Omelette"]; // Add double quotes to strings
    var randomIndex = Math.floor(Math.random() * 13);
    document.getElementById("randomimage").src = '/randomImage/' + Rmeal[randomIndex] + '.jpg'; // Correct the ID selector and add a semicolon
    document.getElementById("des").innerHTML = Rmeal[randomIndex]; // Add a semicolon
    return Rmeal[randomIndex];
}



document.getElementById("buttonnext").addEventListener("click", function() {      
    randommeal()
});


var currentpic=document.getElementById("randomimage").src
var currentname=document.getElementById("des")


function addtofavorite(){
    var arr=[]

    document.getElementById("listpic").src =currentpic
    document.getElementById("listname").innerHTML = currentname
    
}


document.getElementById("addbutton").addEventListener("click", function() {      
    addtofavorite()
    
});