
//function choose a random meal and display with its image
var y=function randommeal() {
    var Rmeal = ["Tonkatsu pork", "Chinon Apple Tarts", "Chakchouka","Sushi","Fresh sardines","Croatian Bean Stew","Leblebi Soup","Big Mac","Cream Cheese Tart","Chocolate Souffle","Chicken Handi","Koshari","French Omelette"]
    var randomIndex = Math.floor(Math.random() * 13)
    ;
    document.getElementById("randomimage").src = '/randomImage/' + Rmeal[randomIndex] + '.jpg'; 
    document.getElementById("des").innerHTML = Rmeal[randomIndex]; 
    return Rmeal[randomIndex];
}



document.getElementById("buttonnext").addEventListener("click", function() {   
    y();   
});