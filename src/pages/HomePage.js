import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <Link to="/chatbot">Chatbot</Link>
      <Link to="/translator">Translator</Link>
      <Link to="/faq">FAQs</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default HomePage;
