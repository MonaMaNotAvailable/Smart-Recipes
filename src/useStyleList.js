//Custom Hook
import {useState, useEffect} from 'react'

const localCache = {};

export default function useStyleList(type){
    const [styleList, setStyleList] = useState([]);
    const [status, setStatus] = useState("unloaded");

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

            const res = await fetch(
                `http://pets-v2.dev-apis.com/pets?type=${type}` 
                //https://pets-v2.dev-apis.com/breeds?animal=dog
                //https://pets-v2.dev-apis.com/breeds?animal=cat
                //https://pets-v2.dev-apis.com/breeds?animal=bird
            )
            const json = await res.json();
            localCache[type] = json.styles || [];
            setStyleList(localCache[type]);
            setStatus("loaded");
        }
    }, [type]);

    return [styleList, status];
}