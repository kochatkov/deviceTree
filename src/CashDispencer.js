import React from 'react';

export const CashDispencer = ({ CashDispencer }) => {

    return (
        <>
            <div className="card__reading">
                <div className="module module__cash-dispenser">
                    {Object.keys(CashDispencer[0]).map(key => (
                        <p key={key} className="module__key">{key} :</p>
                    ))}
                </div>
                <div className="module module__cash-dispenser">
                    {Object.values(CashDispencer[0]).map(value => (
                        <p key={value} className="module__value">{value}</p>
                    ))}
                </div>
            </div>
        </>
    )
}
