import React from "react";
import { useContext } from "react";
import { NoteContext } from "../context/NoteContext";
//import { db } from "../appwrite/databases";

const Color = ({ color }) => {
    const {selectedNote} = useContext(NoteContext);
    const changeColor = () => {
        console.log(selectedNote);
    };
 
    return (
        <div
            className="color"
            onClick={changeColor}
            style={{ backgroundColor:color.colorHeader }}
        ></div>
    );
};

export default Color;