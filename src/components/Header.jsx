import styles from '../css/InfoPage.module.css';
import { Link } from 'react-router-dom';
import Logo from '../assets/hsy_logo.png';
import PropTypes from 'prop-types';

//Header component
const Header = ({ title }) => (
  <div className={styles.box}>
    <header className={styles.header}>
      <h2 className={styles.headerTitle}>{title}</h2>
      <div className={styles.group}>
        <div className={styles.frame}>
          <div className={styles.textWrapper}>
            <Link className={styles.link} to="/">
              Etusivu
            </Link>
          </div>
          <div className={styles.textWrapper}>
            <Link className={styles.link} to="/info-page">
              Info
            </Link>
          </div>
          <div className={styles.textWrapper}>Yhteystiedot</div>
        </div>
      </div>
      <div className={styles.overlapGroup}>
        <img className={styles.hsyLogo} alt="Hsy-logo" src={Logo} />
      </div>
    </header>
  </div>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
