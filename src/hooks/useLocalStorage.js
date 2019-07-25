import React, { useState, useEffect } from "react";

function useLocalStorage(key, initialValue ){
const [storedValue,setStoredValue] = useState(()=>{
    console.log(`useLocalStorage:useState`);
    const item = localStorage.getItem(key);
    console.log(`useLocalStorage:useState`, key, initialValue, item);
    return item ? JSON.parse(item) : initialValue;
});
const setValue=value=> {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify (value));

}
return [storedValue,setValue];
}