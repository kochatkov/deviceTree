import React from 'react';
import { Options } from './Options';

export const POS = ({ POS }) => {

    return (
        <>
            <div className="card__reading">
                <div className="module">
                    {Object.keys(POS[0]).map(key => (
                        <p key={key} className="module__key">{key} :</p>
                    ))}
                </div>
                <div className="module">
                    <p className="module__value">{POS[0].driver}</p>
                    <p className="module__value">{POS[0].modName}</p>
                    <p className="module__value">{POS[0].modVersion}</p>
                    <Options/>
                    <p className="module__value">{POS[0].port}</p>
                    <p className="module__value">{POS[0].status}</p>
                </div>
            </div>
        </>
    )
}
