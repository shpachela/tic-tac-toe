
import Square from './Square';

export default function Board({ squares, onClick, winningLine  }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '10px',
        justifyContent: 'center',
        marginBottom: '20px',
      }}
    >
      {squares.map((val, idx) => (
        <Square key={idx} value={val} onClick={() => onClick(idx)} isHighlighted={winningLine?.includes(idx)}/>
      ))}
    </div>
  );
}
