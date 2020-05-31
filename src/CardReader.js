import React from "react";

export const CardReader = ( { CardReader } ) => {

    return (
        <>
            <div className="card__reading">
                <div className="module">
                    {Object.keys(CardReader[0]).map(key => (
                        <p key={key} className="module__key">{key} :</p>
                    ))}
                </div>
                <div className="module">
                    {Object.values(CardReader[0]).map(value => (
                        <p key={value} className="module__value">{value}</p>
                    ))}
                </div>
            </div>
        </>
    )
}
