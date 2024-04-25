import React from 'react';

/**
 * Renders a card type component.
 *
 * @param {Object} props - The component props.
 * @param {string} props.position - The position of the card type.
 * @param {string} props.cardTypeText - The text to display in the card type.
 * @returns {JSX.Element} The rendered card type component.
 */
function CardType(props) {
    const { position, cardTypeText } = props;
    return (
        <div
            data-testid="card-type"
            className={`${position} bg-white w-[4.625rem] h-8 rounded-[40px] shadow-md py-1 px-4`}
        >
            <p 
                className={"decoration-transparent text-center leading-6"}
                data-testid="card-type-text"
            >
                {cardTypeText}
            </p>
        </div>
    );
}

export default CardType;