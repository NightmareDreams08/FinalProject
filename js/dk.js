async function getUsers(url, callback) {
    const request = await fetch(url);
    const response = await request.json();
    callback(response);
  }
  
  const usersAPI =
    "https://6219f7c781d4074e85b61820.mockapi.io/users";
    
    
    async function createNewUser(newUser, url) {
        const request = await fetch(url, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        });
      
        const response = await request.json();
        console.log("response", response);
      }
      
      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const phone = document.getElementById("phone")
      const password = document.getElementById("password");
      const btn = document.getElementById("btn");
      
      btn.addEventListener("click", function () {
        const newUser = {
          name: name.value,
          email: email.value,
          sdt: phone.value,
          password: password.value,
        };
        createNewUser(newUser, usersAPI);
      });