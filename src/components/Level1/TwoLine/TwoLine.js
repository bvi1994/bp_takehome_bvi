/**
 * Renders a component with two lines of text.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.topLineText - The text for the top line.
 * @param {string} props.bottomLineText - The text for the bottom line.
 * @param {string} props.testIdName - The test ID name for testing purposes.
 * @returns {JSX.Element} - The rendered component.
 */
import React from 'react';
import PropTypes from 'prop-types';

function TwoLine(props) {
    const { topLineText, bottomLineText, testIdName } = props;
    return (
        <div
            data-testid={`two-line-${testIdName}`}
        >
            <p
                className={"text-[#D3D2DE] text-xs"}
                data-testid={`two-line-${testIdName}-top-text`}
            >
                {topLineText}
            </p>
            <p
                className={"text-white text-base"}
                data-testid={`two-line-${testIdName}-bottom-text`}
            >
                {bottomLineText}
            </p>
        </div>
    )
}

TwoLine.propTypes = {
    topLineText: PropTypes.string,
    bottomLineText: PropTypes.string,
    testIdName: PropTypes.string
}

TwoLine.defaultProps = {
    topLineText: "Top Line",
    bottomLineText: "Bottom Line",
    testIdName: "two-line"
}

export default TwoLine;