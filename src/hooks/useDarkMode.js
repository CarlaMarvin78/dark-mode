//import React, { useState, useEffect } from "react";
import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

function useDarkMode(){
   const [darkMode, setDarkMode]=useLocalStorage("darkMode", false);

    useEffect (()=>{
        const bodyElement=document.querySelector("body");
        if (darkMode===true){
            bodyElement.classList.add("dark-mode")
        } else {
            bodyElement.classList.remove ("dark-mode")
        }
    }, [darkMode]);

    return [darkMode, setDarkMode];
}

export default useDarkMode;
