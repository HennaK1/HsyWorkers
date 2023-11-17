import Header from '../components/Header';
import { useState } from 'react';
import styles from '../css/RentManagementPage.module.css';
import DropDownBox from '../components/DropDownBox';
import RentalCalendar from '../components/Calendar';
import StationList from '../components/StationList';
import { Search } from 'react-bootstrap-icons';

// Rent management page
const RentManagement = () => {
  // eslint-disable-next-line no-unused-vars
  const [selectedDate, setSelectedDate] = useState(new Date());
  const boxes = [
    {
      text: '10-13',
      boxStyle: styles.box1,
      textContainerStyle: styles.textContainer,
      iconContainerStyle: styles.iconContainer,
      menuItems: [
        'Matti Meikäläinen',
        'Kirsi Halonen',
        'Lotta Virtanen',
        'Marja Hakkarainen',
        'Kimmo Niira',
      ],
    },
    {
      text: '11-14',
      boxStyle: styles.box2,
      textContainerStyle: styles.textContainer,
      iconContainerStyle: styles.iconContainer,
      menuItems: [
        'Maija Meikäläinen',
        'Katja Halonen',
        'Kimmo Virtanen',
        'Jyrki Hakkarainen',
        'Salla Niira',
      ],
    },
    {
      text: '12-15',
      boxStyle: styles.box3,
      textContainerStyle: styles.textContainer,
      iconContainerStyle: styles.iconContainer,
      menuItems: [
        'Maija Meikäläinen',
        'Raija Halonen',
        'Kimmo Virtanen',
        'Minna Hakkarainen',
        'Salla Niira',
      ],
    },
    {
      text: '13-16',
      boxStyle: styles.box4,
      textContainerStyle: styles.textContainer,
      iconContainerStyle: styles.iconContainer,
      menuItems: [
        'Maija Meikäläinen',
        'Katja Halonen',
        'Kimmo Virtanen',
        'Jyrki Hakkarainen',
        'Salla Niira',
      ],
    },
    {
      text: '14-17',
      boxStyle: styles.box5,
      textContainerStyle: styles.textContainer,
      iconContainerStyle: styles.iconContainer,
      menuItems: [
        'Keijo Meikäläinen',
        'Katja Halonen',
        'Hannu Virtanen',
        'Jyrki Hakkarainen',
        'Tino Niira',
      ],
    },
    {
      text: '15-18',
      boxStyle: styles.box6,
      textContainerStyle: styles.textContainer,
      iconContainerStyle: styles.iconContainer,
      menuItems: [
        'Maija Meikäläinen',
        'Halla Halonen',
        'Niina Virtanen',
        'Jyrki Hakkarainen',
        'Kiira Niira',
      ],
    },
  ];

  return (
    <>
      <Header title="Varaushallinta" />
      <div className={styles.upContainer}>
        <StationList />
        <div className={styles.searchContainer}>
          <p>Etsi asiakkaan varaus</p>
          <div className={styles.searchBox}>
            <Search />
            <p>Varausnumero, asiakkaan nimi...</p>
          </div>
        </div>
      </div>
      <div className={styles.contentsContainer}>
        <div className={styles.boxContainer}>
          {boxes.map((box, index) => (
            <DropDownBox key={index} {...box} />
          ))}
        </div>
        <div className={styles.calendar}>
          <RentalCalendar setSelectedDate={setSelectedDate} />
        </div>
      </div>
    </>
  );
};

export default RentManagement;
