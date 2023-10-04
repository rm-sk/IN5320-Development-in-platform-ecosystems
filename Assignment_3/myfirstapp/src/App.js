import React from "react";
import classes from "./App.module.css";
import { useState, useEffect } from "react";

import { Browse } from "./Browse";
import { Insert } from "./Insert";
import { Navigation } from "./Navigation";
import { Datasets } from "./Datasets";

function MyApp() {
const [activePage, setActivePage] = useState("Browse");
const [tableView, setTableView] = useState(false);
const [clickedID, setClickedId] = useState("lyLU2wR22tC");

function activePageHandler(page) {
    setActivePage(page);
}

function changeTableView(view) {
    setTableView(view);
    console.log("changed table");
}

const handleClick = event => {
    console.log("clicked");
    setClickedId(event.target.id);
    // setTableView(view);
};

useEffect(() => {
    console.log("change made ",tableView);
}, [tableView, clickedID]);

return (
    <div className={classes.container}>
        <div className={classes.left}>
            <Navigation
                activePage={activePage}
                activePageHandler={activePageHandler}
            />
        </div>
        <div className={classes.right}>
            {activePage === "Browse" && <Browse />}
            {activePage === "Insert" && <Insert />}
            {activePage === "Datasets" && <Datasets table={tableView} handleClick={handleClick} clickedID={clickedID}/>}
        </div>
    </div>
);
}

export default MyApp;
