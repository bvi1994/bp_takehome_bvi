import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import defaultCreditCardImage from './assets/Type3.png';
import benepassLogo from './assets/benepasslogo.png';
import visaLogo from './assets/visaLogo.png';  

import CardType from './../../Level2/CardType/CardType.js';
import ZipCode from '../../Level2/ZipCode/ZipCode.js';
import CreditCardNumber from '../../Level2/CreditCardNumber/CreditCardNumber.js';
import MiscCardInfo from '../../Level2/MiscCardInfo/MiscCardInfo.js';

const reducer = (state, action) => {
    switch (action.type) {
        case 'SHOW_DETAILS':
            return {
                ...state,
                showDetails: !state.showDetails
            }
        default:
            return state;
    }
}

function DigitalCard(props) {
    const {
        ccNumber,
        zipCode,
        CVCNumber,
        expiryDate
    } = props
    const initialState = {
        showDetails: false
    }
    const [state, dispatch] = useReducer(reducer, initialState)
    const { showDetails } = state;

    const handleShowDetails = () => {
        dispatch({type: 'SHOW_DETAILS'})
    }
    return (
        <div
            data-testid="digital-card"
            className={"relative max-w-245"}   
        >   
            <img
                src={defaultCreditCardImage} 
                alt="Digital Card" 
                className={"max-w-sm z-0 rounded-3xl absolute"}
            />
            <img 
                src={benepassLogo}
                alt="Benepass Logo"
                className={"absolute z-10 top-6 left-6"}
            />
            <CreditCardNumber
                position={"z-10 absolute top-20 left-6 gap-4"}
                ccNumber={ccNumber}
                showCC={showDetails}
            />
            <CardType 
                className={"z-10 absolute top-6 right-6"}
            />
            <MiscCardInfo
                position={"z-10 absolute top-[136px] left-6 space-x-10"}
                showCVC={showDetails}
                CVCNumber={CVCNumber}
                expiryDate={expiryDate}
            />
            {/* Benepass Logo */}
            <img
                src={visaLogo} 
                alt="Visa Logo"
                className={"z-10 absolute top-230px left-312px"}
            />
            {/* Visa Logo */}
            <CardType 
                position={"z-10 absolute top-6 left-72"}
                cardTypeText="Virtual"
            />
            <ZipCode 
                position={"z-10 absolute top-[222px] left-6"}
                zipCode={zipCode}
                showZip={showDetails}
            />
            <div 
                className={"z-10 absolute top-[282px] left-6"}
                data-testid={"showDetails-field"}
            >
                <input
                    type="checkbox" 
                    id="showDetails" 
                    className={"w-4 h-4 accent-pink-500"}
                    onChange={handleShowDetails}
                    value={showDetails}
                />
                <label
                    data-testid={"Toggling Details"}
                    htmlFor="showDetails"
                    className={showDetails ? "text-pink-500" : ""}
                > 
                    {" Show Details"}
                 </label>
             </div>
        </div>
    );
}

DigitalCard.defaultProps = {
    ccNumber: "1234567812345678",
    zipCode: "12345",
    CVCNumber: "987",
    expiryDate: "4/23"
}

DigitalCard.propTypes = {
    ccNumber: PropTypes.oneOfType([
        PropTypes.string, PropTypes.number
    ]),
    zipCode: PropTypes.oneOfType([
        PropTypes.string, PropTypes.number
    ]),
    CVCNumber: PropTypes.oneOfType([
        PropTypes.string, PropTypes.number
    ]),
    expiryDate: PropTypes.string
}

export default DigitalCard;