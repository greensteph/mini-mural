import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

class FontAwesomeButton extends React.Component {
  static propTypes = {
    faClass: PropTypes.string.isRequired,
    handleOnClick: PropTypes.func
  };

  render() {
    const { faClass, handleOnClick } = this.props;
    return (
      <button
        className="icon"
        aria-label="remove sticky note"
        onClick={handleOnClick}
      >
        <i className={faClass} />
      </button>
    );
  }
}

export default FontAwesomeButton;
