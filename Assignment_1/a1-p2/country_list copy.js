const fullList = [];
const ul = document.querySelector("ul");

// For populating the ul element
function display_list(array){
    ul.replaceChildren();

    for (let i = 0; i < array.length; i++) {
        // Content of new li element
        const newLi = document.createElement("li");
        const newSpan = document.createElement("span");
        const delBtn = document.createElement("button");
        delBtn.innerText = "Delete";

        // Deleting a country from the list
        delBtn.addEventListener("click", () => {
            delete_country(newLi);
        })

        // Creates list
        newSpan.appendChild(document.createTextNode(array[i]));
        newLi.appendChild(newSpan);
        newLi.appendChild(delBtn);

        ul.appendChild(newLi); 
    }
}

// Adding a new country to the list
function add_country(){
    const country = document.getElementById("countryInput").value;
    document.getElementById("countryInput").value = "";

    fullList.push(country);

    display_list(fullList);
}

// Deleting a country from the list
function delete_country(country){
    const list = document.querySelector("ul");
    const elements = document.querySelectorAll("li");

    // Edit current ul
    for (let i=0; i<elements.length; i++) {
        if (elements[i] == country){
            list.removeChild(elements[i]);
            break;
        } 
    }

    // Edit list of all countries
    for (let i=0; i<fullList.length; i++) {
        const countryVal = country.firstChild.firstChild.nodeValue;
        if (fullList[i] == countryVal){
            fullList.splice(i, 1);
            break;
        }
    }
}

// Searching for letters at the beginning of an element
// Returns true if the element starts with searchWord, false if not
function starts_with(searchWord){
    return element.startsWith(searchWord);
}

// Filters an array baseed on the starts_with function
function filter_array(list, searchWord){
    filtered = list.filter(starts_with);
}

// Search bar implementation
searchBar = document.getElementById("searchBar");

searchBar.addEventListener("keyup", () => {
    const term = searchBar.value;

    if (term != "") {
        const result = fullList.filter((el) => el.toLowerCase().startsWith(term.toLowerCase()));
        display_list(result);
    } else {
        display_list(fullList);
    }
})
