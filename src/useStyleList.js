//Custom Hook
//Never use alert in your codes!
import {useState, useEffect, useDebugValue} from 'react'

const localCache = {};

export default function useStyleList(type){
    const [styleList, setStyleList] = useState([]);
    const [status, setStatus] = useState("unloaded");

    useDebugValue("number of values in cache: " + Object.keys(localCache).length);

    useEffect(() =>{
        if (!type){
            setStyleList([]);
        } else if (localCache[type]) {
            setStyleList(localCache[type])
        } else {
            requestStyleList();

        }

        async function requestStyleList(){
            //set empty
            setStyleList([]);
            setStatus("loading");

            // const res = await fetch(
            //     `http://pets-v2.dev-apis.com/pets?type=${type}` 
            //     //https://pets-v2.dev-apis.com/breeds?animal=dog
            //     //https://pets-v2.dev-apis.com/breeds?animal=cat
            //     //https://pets-v2.dev-apis.com/breeds?animal=bird
            // )
            // const json = await res.json();
            const json = require('../styles.json'); 
            localCache[type] = json.styles || [];
            setStyleList(localCache[type]);
            setStatus("loaded");
        }
    }, [type]);

    return [styleList, status];
}