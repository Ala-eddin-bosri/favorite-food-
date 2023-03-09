function back(){
    return window.location.href = "http://127.0.0.1:5500/index.html"
}


function addComment() {
    var comment = document.getElementById("comment").value;   // Get the user's comment
    var newComment = document.createElement("li");  // Create a new ligne (li) element to hold the comment
    var commentText = document.createTextNode(comment);  // Add the comment to li
    newComment.appendChild(commentText);
  var position =document.querySelector('li') //position
    position.insertAdjacentElement("afterend", newComment); // Insert the li element after the empty li
  }
