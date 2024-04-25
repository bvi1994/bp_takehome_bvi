/**
 * ZipCode component displays a zip code with optional position styling.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string|number} props.zipCode - The zip code to display.
 * @param {string} props.position - The position styling for the zip code.
 * @returns {JSX.Element} - The rendered ZipCode component.
 */

import React from 'react';
import PropTypes from 'prop-types';

function ZipCode(props) {
    const { zipCode, position } = props;
    return (
        <div
            data-testid="zip-code-field"
        >
            <p
                className={`${position} text-white text-2xl leading-6 font-normal font-basier-circle`}
                data-testid="zip-code-text"
            >
            ZIP {zipCode}
            </p>
        </div>
    )
}

ZipCode.propTypes = {
    zipCode: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    position: PropTypes.string
}

ZipCode.defaultProps = {
    zipCode: "00000",
    position: ""
}

export default ZipCode;