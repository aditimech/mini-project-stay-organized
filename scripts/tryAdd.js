


//------------------------------Exported Data------------------------------------------------->
const formEl = document.getElementById('goalForm');

        formEl.addEventListener('submit', getData);

        let formJSON;

        function getData(event) {
            event.preventDefault();
            const data = new FormData(event.target);
            console.log(data.entries);// transforms a list of key-value pairs into an object
            formJSON = Object.fromEntries(data.entries());
            console.log(formJSON);
            sendData();
        }

        function sendData() {
            fetch('http://localhost:3004/goals', {
                method: "POST",
                body: JSON.stringify(formJSON),
                headers: {"Content-type": "application/json; charset=UTF-8"}
            })
            .then(response => respond.json())
            .then(json => {
                let confirmationMessage = document.getElementById('confirmationMessage');
                confirmationMessage.innerHTML = "New Goal Added"
            })
            .catch(err => {
                console.log(err);
                let confirmationMessage = document.getElementById('confirmationMessage');
                confirmationMessage.innerHTML = "Unexpected Error"
            })
        }