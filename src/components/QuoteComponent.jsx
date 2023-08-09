import React, { useEffect, useState } from 'react';

export default function QuoteComponent() {
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
    <div className="">
      <h2>
        QuoteComponent :
        {quote.quote}
      </h2>
      <p>
        Author:
        {quote.author}
      </p>
    </div>
  );
}
