let newUsernameEl = document.getElementById('userid');
let categoryEl = document.getElementById('category');
let usernameEl = document.getElementById('todoDropdown');



fetch('http://localhost:8083/api/todos')
.then(response => response.json())
.then(data => {
    for (let i = 0; i < data.length; i++) {
        let option = document.createElement("option");
        let text = option.textContent = data[i].userid
        option.value = data[i].userid;
        newUsernameEl.appendChild(option);
    }
    // for (let i = 0; i < data.length; i++) {
    //     let option = document.createElement("option");
    //     let text = option.textContent = data[i].category
    //     option.value = data[i].category;
    //     categoryEl.appendChild(option);
    // }
    // for (let i = 0; i < data.length; i++) {
    //     let option = document.createElement("option");
    //     let text = option.textContent = data[i].userid
    //     option.value = data[i].userid;
    //     usernameEl.appendChild(option);
    // }
});


