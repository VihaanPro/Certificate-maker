function addUser() {

  user_name = document.getElementById("user_name").value;

  localStorage.setItem("user_name", user_name);

  user_name2 = document.getElementById("user_name2").value;

  localStorage.setItem("user_name2", user_name2);

  user_name3 = document.getElementById("user_name3").value;

  localStorage.setItem("user_name3", user_name3);
  
    window.location = "2.index.html";
}


  