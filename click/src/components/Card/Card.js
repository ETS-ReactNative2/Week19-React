import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

class Card extends React.Component {
    render = () => {
        const { image, id, name, handleClick } = this.props

        return (
            <div
                className="card"
                value={id}
                onClick={() => handleClick(id)}
            >
                <div className="img-container">
                    <img alt={name} src={image} />

                </div>
            </div>

        );
    }
}
Card.propTypes = {
    image: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    handleClick: PropTypes.func
}

export default Card;