import { useState } from 'react';
import '../App.css';

function TranslatorPage() {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const handleTranslate = () => {
    
    setTranslatedText('Translated: ' + inputText);
  };

  return (
    <div className="translator-container">
      <input
        type="text"
        className="translator-input"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button className="translate-button" onClick={handleTranslate}>
        Translate
      </button>
      <p className="translated-text">{translatedText}</p>
    </div>
  );
}

export default TranslatorPage;
