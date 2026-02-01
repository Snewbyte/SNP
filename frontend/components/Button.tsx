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
  onClick,
  darkMode = true
}: { 
  label: string
  onClick?: () => void
  darkMode?: boolean
}) {
  const [catFact, setCatFact] = useState<CatFact | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Define colors based on dark mode
  const colors = darkMode ? {
    buttonBg: '#3a86ff',
    buttonBgHover: '#2c5aa0',
    buttonBgLoading: '#666',
    factBg: '#1a2332',
    factBorder: '#3a5a8a',
    factText: '#e0e8f0',
    factLabel: '#5a9dff',
    errorBg: '#4a2222',
    errorText: '#ff9999',
  } : {
    buttonBg: '#3a86ff',
    buttonBgHover: '#2c5aa0',
    buttonBgLoading: '#ccc',
    factBg: '#f0f4ff',
    factBorder: '#d0deff',
    factText: '#333',
    factLabel: '#1a3a7a',
    errorBg: '#fee',
    errorText: '#c33',
  };

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
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <button 
        onClick={handleClick}
        disabled={loading}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: loading ? 'not-allowed' : 'pointer',
          backgroundColor: loading ? colors.buttonBgLoading : colors.buttonBg,
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontWeight: '600',
          transition: 'background-color 0.3s ease',
          opacity: loading ? 0.7 : 1,
        }}
        onMouseEnter={(e) => !loading && (e.currentTarget.style.backgroundColor = colors.buttonBgHover)}
        onMouseLeave={(e) => !loading && (e.currentTarget.style.backgroundColor = colors.buttonBg)}
      >
        {loading ? 'Loading...' : label}
      </button>

      {(error || catFact) && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          marginTop: '8px',
          zIndex: 1000,
          minWidth: '300px',
        }}>
          {error && (
            <div style={{
              padding: '12px',
              backgroundColor: colors.errorBg,
              color: colors.errorText,
              borderRadius: '4px',
              fontSize: '14px',
            }}>
              Error: {error}
            </div>
          )}

          {catFact && (
            <div style={{
              padding: '16px',
              backgroundColor: colors.factBg,
              borderRadius: '8px',
              fontSize: '14px',
              lineHeight: '1.6',
              color: colors.factText,
              border: `1px solid ${colors.factBorder}`,
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}>
              <p style={{ margin: '0 0 8px 0', fontWeight: 'bold', color: colors.factLabel }}>Cat Fact:</p>
              <p style={{ margin: 0, color: colors.factText }}>{catFact.text}</p>
              {catFact.upvotes > 0 && (
                <p style={{ margin: '8px 0 0 0', fontSize: '12px', color: colors.factText }}>
                  👍 {catFact.upvotes} upvotes
                </p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}