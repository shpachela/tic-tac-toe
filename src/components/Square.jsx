export default function Square({ value, onClick, isHighlighted  }) {
  const getColor = (val) => {
    if (val === 'X') return '#9a8aed';
    if (val === 'O') return '#ffb4b4';
    return 'black';
  };
  return (
    <button
      onClick={onClick}
      style={{
        width: '80px',
        height: '80px',
        fontSize: '2rem',
        fontWeight: 'bold',
        cursor: 'pointer',
        backgroundColor: isHighlighted ? '#c8f7c5' : '#f0f0f0',
        border: 'none',
        borderRadius: '8px',
        transition: 'background-color 0.2s',
        margin: '4px',
        color: getColor(value),
      }}
    >
      {value}
    </button>
  );
}