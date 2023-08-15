import React, { useEffect, useState } from 'react';
import Header from './Header.jsx';

export default function Quote() {
  return (
    <>
      <Header />
      <QuoteComponent />
    </>
  );
}

function QuoteComponent() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quote, setQuote] = useState({});

  useEffect(() => {
    const request = async () => {
      try {
        const response = await fetch(
          'https://api.api-ninjas.com/v1/quotes?category=computers',
          {
            headers: {
              'X-Api-Key': 'FSAUvyMJg/Y3slpTVoMV6Q==E715G6wVjjSzZ2QG',
            },
          },
        );
        if (!response.ok) {
          throw new Error('Error fetching quote');
        }
        const data = await response.json();

        setQuote(data[0]);
        setLoading(false);
      } catch (error) {
        setError('Error fetching quotes');
        setLoading(false);
      }
    };

    request();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error !== null) {
    return <p>{error}</p>;
  }

  return (
    <>
      <div className="quote-container">
        <h2>
          <span>quote</span>
          {' '}
          :
          {quote.quote}
        </h2>
        <p>
          <span>Author</span>
          :
          {quote.author}
        </p>
      </div>
    </>
  );
}
