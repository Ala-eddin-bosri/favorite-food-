
var currentpic;


function meal(pic,name){
    this.pic=pic,
    this.name=name
}


var meal1=['/randomImage/tonkatsu pork.jpg',"Tonkatsu pork"]
var meal2=['/randomImage/Chinon Apple Tarts.jpg',"Chinon Apple Tarts"] // hna mazalt ma9aretch bech nhothom kol wahda fi array wala la !!!!
var meal3=['/randomImage/tonkatsu pork.jpg',"Tonkatsu pork"]
var meal4=['/randomImage/tonkatsu pork.jpg',"Tonkatsu pork"]
var meal5=['/randomImage/tonkatsu pork.jpg',"Tonkatsu pork"]
var meal6=['/randomImage/tonkatsu pork.jpg',"Tonkatsu pork"]
var meal8=['/randomImage/tonkatsu pork.jpg',"Tonkatsu pork"]
var meal9=['/randomImage/tonkatsu pork.jpg',"Tonkatsu pork"]
var meal10=['/randomImage/tonkatsu pork.jpg',"Tonkatsu pork"]
var meal11=['/randomImage/tonkatsu pork.jpg',"Tonkatsu pork"]




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


var Rmeal = ["Tonkatsu pork", "Chinon Apple Tarts", "Chakchouka","Sushi","Fresh sardines","Croatian Bean Stew","Leblebi Soup","Big Mac","Cream Cheese Tart","Chocolate Souffle","Chicken Handi","Koshari","French Omelette"]
    var randomIndex = Math.floor(Math.random() * 13)


var currentpic=document.getElementById("randomimage").src //normalment hathy bech ta3tini taswira random hiya taswira eli mawjouda tw 



function addtofavorite(){

        var x = document.createElement("li");
        var t = document.createTextNode( document.getElementById("des").innerHTML);
      
        x.appendChild(t);
        
        document.getElementById("listname").appendChild(x);
        document.getElementById("listpic").src='/randomImage/' +document.getElementById("des").innerHTML+ '.jpg'
      }
    
        // hna el 8alta win 
    







        document.getElementById("addbutton").addEventListener("click", function() {      
    addtofavorite()
    
});