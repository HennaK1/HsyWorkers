import { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import styles from '../css/RentManagementPage.module.css';
import { ChevronCompactDown } from 'react-bootstrap-icons';

//Station list component
const StationList = () => {
  const [selectedStation, setSelectedStation] = useState(null);
  const stations = ['Konala', 'Jorvas', 'Ämmässuo'];

  const handleDropdownToggle = () => {};

  const handleStationSelect = (station) => {
    setSelectedStation(station);
  };

  // eslint-disable-next-line react/prop-types
  function CustomToggle({ children, onClick }) {
    return (
      <div className={styles.dropDownButton} onClick={(e) => onClick(e)}>
        {children}
        <ChevronCompactDown />
      </div>
    );
  }

  return (
    <div className={styles.stationContainer}>
      <p>Valitse asema</p>
      <div className={styles.stationBox}>
        <p>{selectedStation || 'Konala'}</p>
        <Dropdown onToggle={handleDropdownToggle}>
          <Dropdown.Toggle
            as={CustomToggle}
            variant="success"
            id="dropdown-stations"
          ></Dropdown.Toggle>

          <Dropdown.Menu className={styles.customDropdownMenu2}>
            {stations.map((station, index) => (
              <Dropdown.Item
                key={index}
                onClick={() => handleStationSelect(station)}
              >
                {station}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default StationList;
