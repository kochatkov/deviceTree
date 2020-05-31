import React, {useState} from "react";
import data from "./data.json";


export const Products = () => {
    const [
        inputProductValue,
        setInputProoductValue
    ] = useState(data
        .api
        .deviceTree
        .ProductDispenser[0]
        .products[0]
        .count);

    const isProductType = data
        .api
        .deviceTreeTypeMap
        .ProductDispenser[0]
        .products[0]
        .count;

    const changeHandler = (event) => {
        if (typeof inputProductValue === isProductType) {
            setInputProoductValue(parseInt(event.target.value) || 0);
        }
    }

    return (
        <>
            <input
                className="input"
                type="text"
                placeholder="enter amount of..."
                onChange={(event) => changeHandler(event)}
                value={inputProductValue}
            />
        </>
    )
}
