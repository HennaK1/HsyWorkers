import styles from '../css/InfoPage.module.css';
import { Link } from 'react-router-dom';
import Logo from '../assets/hsy_logo.png';

//Header component
const Header = () => (
  <div className={styles.box}>
    <header className={styles.header}>
      <div className={styles.group}>
        <div className={styles.frame}>
          <div className={styles.textWrapper}>Etusivu</div>
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

export default Header;
