import React from 'react';
import PropTypes from 'prop-types';

function CreditCardNumber(props) {
    const { position, ccNumber, showCC } = props;
    return (
        <div
            data-testid="credit-card-number-field"
            className={`${position}`}
        >
            <p
                className={"text-white text-2xl leading-6 font-normal font-basier-circle"}
                data-testid="credit-card-number-text"
            >
                {showCC ? ccNumber.replace(/(\d{4}(?!\s))/g, "$1 ") : `•••• •••• •••• ${ccNumber.slice(-4)}`}
                {/* Either display the full credit card number or mask it except for the last four*/}
            </p>
        </div>
    )
}

CreditCardNumber.propTypes = {
    position: PropTypes.string,
    ccNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    showCC: PropTypes.bool
}

CreditCardNumber.defaultProps = {
    position: "",
    ccNumber: "1234123412341234",
    showCC: false
}

export default CreditCardNumber;