let newUsernameEl = document.getElementById('userid');
let categoryEl = document.getElementById('category');
let usernameEl = document.getElementById('todoDropdown');



        fetch('http://localhost:8083/api/users')
.then(response => response.json())
.then(data => {
    for (let i = 0; i < data.length; i++) {
        let opt = document.createElement("option");
        let text = opt.textContent = data[i].name
        let value = opt.value = data[i].id;
        console.log(value)
        newUsernameEl.appendChild(opt);
    }
    for (let i = 0; i < data.length; i++) {
        let option = document.createElement("option");
        let text = option.textContent = data[i].username
        option.value = data[i].username;
        usernameEl.appendChild(option);
   }
});

fetch('http://localhost:8083/api/categories')
.then(response => response.json())
.then(data => {
for (let i = 0; i < data.length; i++) {
     let opt = document.createElement("option");
     let text = opt.textContent = data[i].name
     opt.value = data[i].name;
     categoryEl.appendChild(opt);
 }
});








     

