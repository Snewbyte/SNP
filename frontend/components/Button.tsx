'use client';

import { useState } from 'react';

interface CatFact {
  _id: string;
  text: string;
  type: string;
  user: string;
  upvotes: number;
  userUpvoted: boolean;
}

export default function Button({ 
  label, 
  onClick 
}: { 
  label: string
  onClick?: () => void
}) {
  const [catFact, setCatFact] = useState<CatFact | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCatFact = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://catfact.ninja/fact');
      if (!response.ok) {
        throw new Error('Failed to fetch cat fact');
      }
      const data = await response.json();
      // Transform the API response to match our interface
      setCatFact({
        _id: Date.now().toString(),
        text: data.fact,
        type: 'fact',
        user: 'catfact.ninja',
        upvotes: 0,
        userUpvoted: false,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setCatFact(null);
    } finally {
      setLoading(false);
    }
  };

  const handleClick = async () => {
    await fetchCatFact();
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
      <button 
        onClick={handleClick}
        disabled={loading}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: loading ? 'not-allowed' : 'pointer',
          backgroundColor: loading ? '#999' : '#3a86ff',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontWeight: '600',
          transition: 'background-color 0.3s ease',
          opacity: loading ? 0.7 : 1,
        }}
        onMouseEnter={(e) => !loading && (e.currentTarget.style.backgroundColor = '#2c5aa0')}
        onMouseLeave={(e) => !loading && (e.currentTarget.style.backgroundColor = '#3a86ff')}
      >
        {loading ? 'Loading...' : label}
      </button>

      {error && (
        <div style={{
          padding: '12px',
          backgroundColor: '#fee',
          color: '#c33',
          borderRadius: '4px',
          fontSize: '14px',
        }}>
          Error: {error}
        </div>
      )}

      {catFact && (
        <div style={{
          padding: '16px',
          backgroundColor: '#f0f4ff',
          borderRadius: '8px',
          fontSize: '14px',
          lineHeight: '1.6',
          maxWidth: '400px',
          color: '#333',
          border: '1px solid #d0deff',
        }}>
          <p style={{ margin: '0 0 8px 0', fontWeight: 'bold', color: '#1a3a7a' }}>Cat Fact:</p>
          <p style={{ margin: 0, color: '#333' }}>{catFact.text}</p>
          {catFact.upvotes > 0 && (
            <p style={{ margin: '8px 0 0 0', fontSize: '12px', color: '#666' }}>
              👍 {catFact.upvotes} upvotes
            </p>
          )}
        </div>
      )}
    </div>
  )
}