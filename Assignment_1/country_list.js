function add_country(){
    country = document.querySelector("textarea").value;
    document.querySelector("textarea").value = "";

    if (country) {
        console.log(country);
    }
    

    const list = document.querySelector("ul");
    const newLi = document.createElement("li");

    newLi.appendChild(document.createTextNode(country));
    list.appendChild(newLi);

    

}