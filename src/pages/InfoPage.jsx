import styles from '../css/InfoPage.module.css';
import Header from '../components/Header';
import { Button } from 'react-bootstrap';
import { TrashFill, PencilFill } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

const CurrentInfo = () => {
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate('/info-edit');
  };

  return (
    <>
      <Header />
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
                <div className={styles.textWrapper}>
                  <PencilFill /> Muokkaa
                </div>
              </Button>
              <Button className={styles.deleteButton}>
                <div className={styles.textWrapper2}>
                  <TrashFill />
                  Poista
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Button className={styles.buttonContainer}>
        <div className={styles.textWrapperButton} onClick={handleEditClick}>
          Infon muokkausloki
        </div>
      </Button>
    </>
  );
};

export default CurrentInfo;
