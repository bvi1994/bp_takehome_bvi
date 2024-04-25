/**
 * Renders the miscellaneous card information component.
 *
 * @param {Object} props - The component props.
 * @param {string} props.position - The position of the component.
 * @param {boolean} props.showCVC - Indicates whether to show the CVC number.
 * @param {string} props.CVCNumber - The CVC number.
 * @param {string} props.expiryDate - The expiry date of the card.
 * @returns {JSX.Element} The rendered component.
 */

import React from "react";
import PropTypes from "prop-types";
import TwoLine from "../../Level1/TwoLine/TwoLine";

function MiscCardInfo(props) {
    const { position , showCVC, CVCNumber, expiryDate} = props;
    return (
        <div 
            data-testid="misc-card-info-vaildThru-cvc"
            className={`${position} flex flex-row`}
        >
            <TwoLine
                topLineText="Valid Thru"
                bottomLineText={expiryDate}
                testIdName={"valid-thru-field"}
            />
            <TwoLine
                topLineText="CVC"
                bottomLineText={showCVC ? CVCNumber : "•••"}
                testIdName={"cvc-field"}
            />
        </div>
    )
}

MiscCardInfo.propTypes = {
    position: PropTypes.string,
    showCVC: PropTypes.bool,
    CVCNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    expiryDate: PropTypes.string
}

MiscCardInfo.defaultProps = {
    position: "",
    showCVC: false,
    CVCNumber: "123",
    expiryDate: "12/34"
}


export default MiscCardInfo;