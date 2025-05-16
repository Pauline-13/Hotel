fetch("../json/restaurant.json")
.then((response) => response.json())
.then((json) => console.log(json))
