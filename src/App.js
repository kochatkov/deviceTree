import React, { useState } from 'react';
import './App.scss';
import data from './data.json';
import { CardReader } from './CardReader';
import { CashAcceptor } from './CashAcceptor';
import { CashDispencer } from './CashDispencer';
import { POS } from "./POS";
import { Printer } from "./Printer";
import { ProductDispenser } from "./ProductDispenser";

function App() {
    const deviceTree = data.api.deviceTree;
    const [infoLoaded, setInfoLoaded] = useState(false);
    const [cardReaderLoaded, setCardReaderLoaded] = useState(false);
    const [loadedCashAcceptor, setLoadedCashAcceptor] = useState(false);
    const [loadedCashDispenser, setLoadedCashDispenser] = useState(false);
    const [loadedPOS, setloadedPOS] = useState(false);
    const [loadedPrinter, setLoadedPrinter] = useState(false);
    const [loadedProductDispenser, setLoadedProductDispenser] = useState(false);

    console.log(deviceTree.ProductDispenser);

    const handleChange = (loaded, setLoaded) => {
        setLoaded(true);
        if (loaded === true) {
            setLoaded(false)
        }
    }

    const handleLoadingInfo = () => {
        handleChange(infoLoaded, setInfoLoaded)
    }

    const handleLoadingCardReader = () => {
      handleChange(cardReaderLoaded, setCardReaderLoaded);
    }

    const handleLoadingCashAccpetor = () => {
        handleChange(loadedCashAcceptor, setLoadedCashAcceptor);
    }

    const handleLoadingCashDispenser = () => {
        handleChange(loadedCashDispenser, setLoadedCashDispenser);
    }

    const handleLoadingPOS = () => {
        handleChange(loadedPOS, setloadedPOS);
    }

    const handleLoadingPrinter = () => {
        handleChange(loadedPrinter, setLoadedPrinter);
    }

    const handleLoadingProductDispenser = () => {
        handleChange(loadedProductDispenser, setLoadedProductDispenser);
    }

  return (
    <div className="App">
        <button
            type="button"
            className="buttons"
            onClick={() => handleLoadingInfo()}
        >
            INTERFACE
        </button>
        {
            infoLoaded &&
        <div className="App__components-container">
            <button
                type="button"
                className="buttons"
                onClick={() => handleLoadingCardReader()}
            >
                CardReader
            </button>
            {cardReaderLoaded && <CardReader CardReader={deviceTree.CardReader} />
            }
            <button
                type="button"
                className="buttons"
                onClick={() => handleLoadingCashAccpetor()}
            >CashAcceptor</button>
            {
                loadedCashAcceptor &&
                <CashAcceptor CashAcceptor={deviceTree.CashAcceptor} />
            }
            <button
                type="button"
                className="buttons"
                onClick={() => handleLoadingCashDispenser()}
            >
                CashDispencer
            </button>
            {
                loadedCashDispenser &&
                <CashDispencer CashDispencer={deviceTree.CashDispenser} />
            }
            <button
                type="button"
                className="buttons"
                onClick={() => handleLoadingPOS()}
            >
                POS
            </button>
            {loadedPOS && <POS POS={deviceTree.POS} />}
            <button
                type="button"
                className="buttons"
                onClick={() => handleLoadingPrinter()}
            >
                Printer
            </button>
            {loadedPrinter && <Printer Printer={deviceTree.Printer} />}
            <button
                type="button"
                className="buttons"
                onClick={() => handleLoadingProductDispenser()}
            >ProductDispenser</button>
            {
                loadedProductDispenser && <ProductDispenser
                    ProductDispenser={deviceTree.ProductDispenser}
                />
            }
        </div>
        }
    </div>
  );
}

export default App;
