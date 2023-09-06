const fullList = document.getElementById("fullList")


// Adding a new country to the list
function add_country(){
    const country = document.getElementById("countryInput").value;
    document.getElementById("countryInput").value = "";

    const newLi = document.createElement("li");

    const delBtn = document.createElement("button");
    delBtn.innerText = "Delete";

    newLi.appendChild(document.createTextNode(country));
    newLi.appendChild(delBtn);

    fullList.appendChild(newLi); 
    
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

// Filters an array baseed on the starts_with function
function filter_array(list, searchWord){
    filtered = list.filter(starts_with);
}

// Search bar implementation
searchBar = document.getElementById("searchBar");

searchBar.addEventListener("keyup", () => {
    if (searchBar.value != "") {
        const listArray = fullList.getElementsByTagName("li");
        const result = filter_array(listArray, searchBar.value);
        result.setAttribute("id", "searchList");
        fullList.style.display = "none";
        document.querySelector("body").appendChild(result);
    } else {
        fullList.style.display = "block";
        document.querySelector("searchList").style.display = "none";
    }
})




