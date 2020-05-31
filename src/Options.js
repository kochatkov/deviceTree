import React, { useState } from 'react';
import data from "./data.json";

export const Options = () => {
    const [inputValue, setInputValue] = useState(data.api.deviceTree.POS[0].options[1].merchantIdx);
    const isCheckType = data.api.deviceTreeTypeMap.POS[0].options[1].merchantIdx;

    const inputHandler = (event) => {
        if (typeof inputValue === isCheckType) {
            setInputValue(event.target.value);
        }
    }

    return (
        <>
            <input
                type="text"
                className="input"
                value={inputValue}
                onChange={(event) => inputHandler(event)}
                placeholder="Please enter amount of money or product"
            />
            </>
    )
}
