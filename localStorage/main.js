function myFunction(){
  if(typeof(Storage) !== "undefined") {
      console.log("There is local storage...");
      localStorage.setItem("message", "It works!");
  } else {
      console.log("There is no local storage!!!");
  }
}

function display(){
  document.getElementById("storage-content").innerHTML = localStorage.getItem("message");
}

function removeStorage() {
  localStorage.removeItem("message");
}
