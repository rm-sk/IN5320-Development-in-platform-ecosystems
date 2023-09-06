
// Adding a new country to the list
function add_country(){
    const country = document.querySelector("textarea").value;
    document.querySelector("textarea").value = "";

    const list = document.querySelector("ul");
    const newLi = document.createElement("li");

    const delBtn = document.createElement("button");
    delBtn.innerText = "Delete";

    newLi.appendChild(document.createTextNode(country));
    newLi.appendChild(delBtn);

    list.appendChild(newLi); 
    
    // Deleting a country from the list
    delBtn.addEventListener("click", () => {
        delete_country(newLi);
    })
}

// Deleting a country from the list
function delete_country(country){
    const list = document.querySelector("ul");
    const elements = document.querySelectorAll("li");

    for (let i=0; i<elements.length; i++) {
        if (elements[i] == country) {
            list.removeChild(elements[i]);
        }
    }
}

// Searching for letters at the beginning of an element
// Returns true if the element starts with searchWord, false if not
function starts_with(element, searchWord){
    return element.startsWith(searchWord);
}
