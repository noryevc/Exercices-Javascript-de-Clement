var nom = prompt("Comment tu t'appelles?");

if ((nom.length > 1) && (nom.length < 10)){
 alert("Bonjour " + nom + "?")
}
else{
  alert("réessaye")
}