async function getUsers(url, callback) {
    const request = await fetch(url);
    const response = await request.json();
    callback(response);
    console.log(response)
  }
  
  const usersAPI =  
    "https://6219f7c781d4074e85b61820.mockapi.io/users";
    function onSubmit(event) {
      event.preventDefault()
      getUsers(usersAPI,usersLogin)
    }
    
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const myForm = document.getElementById("form");
    function usersLogin(account){
      for(let i = 0;i < account.length;i++){
        if(email.value === account[i].name & password.value === account[i].password){
          alert("Đăng nhập thành công");
          saveUserToLocalstorage(account[i].name)
          window.location.href = "http://127.0.0.1:5500/Centerweb.html";
        } else {
        
          }
  }
  alert("Đăng nhập không thành công");
}

myForm.addEventListener("submit", onSubmit)
function saveUserToLocalstorage(account) {
  localStorage.setItem("account", JSON.stringify(account));
}
 
  