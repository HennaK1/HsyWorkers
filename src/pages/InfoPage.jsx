import styles from '../css/InfoPage.module.css';
import Logo from '../assets/hsy_logo.png';
import { Button } from 'react-bootstrap';

export const CurrentInfo = () => {
  return (
    <>
      <div className={styles.box}>
        <header className={styles.header}>
          <div className={styles.group}>
            <div className={styles.frame}>
              <div className={styles.textWrapper}>Sortti-asemat</div>
              <div className={styles.textWrapper}>Jäteopas</div>
              <div className={styles.textWrapper}>Yhteystiedot</div>
            </div>
          </div>
          <div className={styles.overlapGroup}>
            <img className={styles.hsyLogo} alt="Hsy-logo" src={Logo} />
          </div>
        </header>
      </div>
      <div className={styles.label}>
        <h1 className={styles.textWrapper}>Ajankohtainen info</h1>
      </div>
      <div className={styles.box2}>
        <div className={styles.rectangle}>
          <p className={styles.textContent}>
            Kivikon Sortti-asemalla remontti 1.9.-30.11. Huomioithan peräkärryä
            varatessasi, että Kivikon Sortti-asemalle voi tuoda remontin aikana
            vain haravointi- ja risujätettä, omenoita, kiviaineksia ja
            vaarallisia jätteitä. Sisäänajo Kivikonlaita 5 B-portin kautta.
          </p>
          <div className={styles.box3}>
            <div className={styles.group3}>
              <Button className={styles.editButton}>
                <div className={styles.textWrapper}>Muokkaa</div>
              </Button>
              <Button className={styles.deleteButton}>
                <div className={styles.textWrapper2}>Poista</div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentInfo;
