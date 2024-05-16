import React, {useState, useEffect} from 'react';
import '../App.css';

function Poetry() {
    const [poems, setPoems] = useState([]);

    useEffect(() => {
        fetch('/poems.txt')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.text();
        })
        .then(text => {
          const poemsArray = text.split('nextpoem').map((poem, index) => ({
            id: index,
            content: poem.trim(),
          }));
          setPoems(poemsArray);
        })
        .catch(error => {
          console.error('There has been a problem with your fetch operation:', error);
        });
    }, []);
    
    return (
        <div className="poetry-container">
        <h1 className="centered">Poetry Projects</h1>
        
        <div className="poem-list">
            {poems.map(poem => (
            <div key={poem.id} className="poem-box">
                <pre>{poem.content}</pre>
            </div>
            ))}
        </div>
        
        </div>
    );
}

export default Poetry;
