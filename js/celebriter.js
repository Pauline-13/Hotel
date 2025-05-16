fetch("https://api.api-ninjas.com/v1/celebrity")
.then((response) => response.json())
.then((json) => console.log(json))