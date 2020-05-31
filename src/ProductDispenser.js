import React from 'react';
import {Products} from "./Products";

export const ProductDispenser = ({ProductDispenser}) => {

    return (
        <>
            <div className="card__reading">
                <div className="module">
                    {Object.keys(ProductDispenser[0]).map(key => (
                        <p key={key} className="module__key">{key} :</p>
                    ))}
                </div>
                <div className="module">
                    <p className="module__value">{ProductDispenser[0].driver}</p>
                    <p className="module__value">{ProductDispenser[0].modName}</p>
                    <p className="module__value">{ProductDispenser[0].modVersion}</p>
                    <p className="module__value">{ProductDispenser[0].port}</p>
                    <Products/>
                    <p className="module__value">{ProductDispenser[0].status}</p>
                </div>
            </div>
        </>
    )
}
