import { useState } from 'react';
import '../App.css';

const fruits = [
  { id: 1, name: 'Apple', description: 'Healthy and sweet' },
  { id: 2, name: 'Banana', description: 'High in potassium' },
  
];

function ChatbotPage() {
  const [selectedFruit, setSelectedFruit] = useState(null);

  return (
    <div className="chatbot-container">
      {fruits.map((fruit) => (
        <button key={fruit.id} className="fruit-button" onClick={() => setSelectedFruit(fruit)}>
          {fruit.name}
        </button>
      ))}
      {selectedFruit && (
        <div className="selected-fruit">
          <h3>{selectedFruit.name}</h3>
          <p>{selectedFruit.description}</p>
        </div>
      )}
    </div>
  );
}

export default ChatbotPage;
