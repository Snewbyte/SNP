export default function Button({ 
  label, 
  onClick 
}: { 
  label: string
  onClick?: () => void
}) {
  return (
    <button 
      onClick={onClick}
      style={{
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        backgroundColor: '#3a86ff',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        fontWeight: '600',
        transition: 'background-color 0.3s ease',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#2c5aa0')}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#3a86ff')}
    >
      {label}
    </button>
  )
}