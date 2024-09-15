import axios from 'axios';
import { useEffect, useState } from 'react';
function FaqPage() {
  const [faqs, setFaqs] = useState([]);
  const [newFaq, setNewFaq] = useState('');

  useEffect(() => {
    axios.get('/faqs').then((response) => setFaqs(response.data));
  }, []);

  const handleCreate = () => {
    axios.post('/faqs', { question: newFaq }).then((response) => {
      setFaqs([...faqs, response.data]);
    });
  };

  return (
    <div>
      <h1>FAQs</h1>
      {faqs.map((faq) => (
        <div key={faq.id}>{faq.question}</div>
      ))}
      <input
        value={newFaq}
        onChange={(e) => setNewFaq(e.target.value)}
      />
      <button onClick={handleCreate}>Add FAQ</button>
    </div>
  );
}

export default FaqPage;
