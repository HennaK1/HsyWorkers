/* eslint-disable react/prop-types */
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'react-bootstrap';
import { ChevronCompactDown } from 'react-bootstrap-icons';
import styles from '../css/RentManagementPage.module.css';

function CustomToggle({ children, onClick }) {
  return (
    <div className={styles.dropDownButton} onClick={(e) => onClick(e)}>
      {children}
      <ChevronCompactDown />
    </div>
  );
}

const DropDownBox = ({
  text,
  boxStyle,
  textContainerStyle,
  iconContainerStyle,
  menuItems,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className={boxStyle}>
      <div className={textContainerStyle}>
        <p>{text}</p>
      </div>
      <div className={iconContainerStyle}>
        <Dropdown onToggle={handleDropdownToggle} show={showDropdown}>
          <Dropdown.Toggle
            as={CustomToggle}
            variant="success"
            id={`dropdown-${text}`}
          />

          <Dropdown.Menu className={styles.customDropdownMenu}>
            {menuItems.map((item, index) => (
              <Dropdown.Item key={index} href={`#/${text}-action-${index + 1}`}>
                {item}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

DropDownBox.propTypes = {
  text: PropTypes.string.isRequired,
  boxStyle: PropTypes.string.isRequired,
  textContainerStyle: PropTypes.string.isRequired,
  iconContainerStyle: PropTypes.string.isRequired,
  menuItems: PropTypes.arrayOf(PropTypes.string),
};

export default DropDownBox;
