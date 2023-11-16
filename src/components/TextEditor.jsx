import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../css/TextEditor.css';

const TextEditor = () => {
  const editorRef = useRef(null);
  const navigate = useNavigate();

  const handleCancelClick = () => {
    navigate('/info-page');
  };

  return (
    <>
      <Editor
        apiKey="your-api-key"
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue="<p>Sortti-aseman poikkeukselliset aukioloajat...</p>"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist',
            'autolink',
            'lists',
            'link',
            'image',
            'charmap',
            'preview',
            'anchor',
            'searchreplace',
            'visualblocks',
            'code',
            'fullscreen',
            'insertdatetime',
            'media',
            'table',
            'code',
            'help',
            'wordcount',
          ],
          toolbar:
            'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style:
            'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
        }}
      />
      <div className="buttonsContainer">
        <Button className="buttonCancel" onClick={handleCancelClick}>
          Peruuta
        </Button>
        <Button className="buttonPreview">Esikatsele</Button>
      </div>
    </>
  );
};

export default TextEditor;
