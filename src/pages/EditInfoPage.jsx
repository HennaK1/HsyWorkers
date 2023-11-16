import Header from '../components/Header';
import TextEditor from '../components/TextEditor';
import styles from '../css/EditInfoPage.module.css';

//Information edit page
const EditInfo = () => {
  return (
    <>
      <Header />
      <div className={styles.contentContainer}>
        <div className={styles.textEditorContainer}>
          <h1>Muokkaa ajankohtaista infoa</h1>
          <TextEditor />
        </div>
      </div>
    </>
  );
};

export default EditInfo;
