
var currentpic;
var count=0;

function meal(pic,name){
    this.pic=pic,
    this.name=name
}







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


var currentpic=document.getElementById("randomimage").src 



function addtofavorite(){
    
        var x = document.createElement("li");
        var t = document.createTextNode( document.getElementById("des").innerHTML);
      
        x.appendChild(t);
        
        document.getElementById("listname").appendChild(x);
        document.getElementById("listpic").src='/randomImage/' +document.getElementById("des").innerHTML+ '.jpg'
       
      }
    
        
    







        document.getElementById("addbutton").addEventListener("click", function() {      
    addtofavorite()
    
});



    












