import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../css/CustomCalendar.css';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

// Calendar component
const RentalCalendar = ({ setSelectedDate }) => {
  const [selectedDate, setLocalSelectedDate] = useState(new Date());
  const navigate = useNavigate();

  useEffect(() => {
    const calendar = document.querySelector('.react-calendar');
    if (calendar) {
      calendar.addEventListener('click', handleCalendarClick);
    }

    return () => {
      if (calendar) {
        calendar.removeEventListener('click', handleCalendarClick);
      }
    };
  }, []);

  const handleCalendarClick = (event) => {
    event.preventDefault();
  };

  const handleChange = (date) => {
    setLocalSelectedDate(date);
    setSelectedDate(date);
  };

  const handleInfoClick = () => {
    navigate('/info-page');
  };

  // Dates to be disabled to demo
  const disabledDates = [
    new Date(2023, 11, 1),
    new Date(2023, 10, 22),
    new Date(2023, 10, 27),
  ];

  const tileDisabled = ({ date }) => {
    // Check if the date is in the disabledDates array
    return disabledDates.some(
      (disabledDate) => date.toDateString() === disabledDate.toDateString(),
    );
  };

  const tileClassName = ({ date }) => {
    return tileDisabled({ date }) ? 'disabled-tile' : '';
  };

  return (
    <>
      <Calendar
        onChange={handleChange}
        value={selectedDate}
        minDate={new Date()}
        tileDisabled={tileDisabled}
        tileClassName={tileClassName}
      />
      <Button className="infoPageButton" onClick={handleInfoClick}>
        {' '}
        Ajankohtainen info{' '}
      </Button>
    </>
  );
};

RentalCalendar.propTypes = {
  setSelectedDate: PropTypes.func,
};

export default RentalCalendar;
