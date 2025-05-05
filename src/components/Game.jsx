
import { useState, useEffect } from 'react';
import Board from './Board';
import { calculateWinner } from '../utils/calculaterWinner';
import { getBestMove } from '../utils/minimax';

export default function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [isVsComputer, setIsVsComputer] = useState(true);
  const { winner, line } = calculateWinner(squares);
  const isDraw = !winner && squares.every((square) => square !== null);

  useEffect(() => {
    if (!isVsComputer) return;
    if (currentPlayer === 'O' && !winner) {
      const emptyIndices = squares
        .map((val, idx) => (val === null ? idx : null))
        .filter((val) => val !== null);

      if (emptyIndices.length === 0) return;

      const bestMove = getBestMove(squares);

      setTimeout(() => {
        const newSquares = [...squares];
        newSquares[bestMove] = 'O';
        setSquares(newSquares);
        setCurrentPlayer('X');
      }, 500);
    }
  }, [squares, currentPlayer, winner]);


  function handleClick(index) {
    if (squares[index] || winner || (isVsComputer && currentPlayer === 'O')) return;

    const newSquares = [...squares];
    newSquares[index] = currentPlayer;
    setSquares(newSquares);
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  }

  function resetGame() {
    setSquares(Array(9).fill(null));
    setCurrentPlayer('X');
  }

  return (
    <div
  style={{
    display: 'inline-block',
    padding: '1rem',
    border: '2px solid #ddd',
    borderRadius: '12px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    textAlign: 'center',
  }}
>
  <p style={{ fontWeight: 'bold', fontSize: '18px', marginBottom: '1rem' }}>
    {winner
      ? `🏆 Победитель: ${winner}`
      : isDraw
      ? '🤝 Ничья!'
      : `Сейчас ходит: ${currentPlayer}`}
  </p>

  <Board squares={squares} onClick={handleClick} winningLine={line} />

  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '1rem' }}>
    <button
      onClick={resetGame}
      style={{
        padding: '10px 20px',
        backgroundColor: '#4CAF50',
        color: '#fff',
        border: 'none',
        borderRadius: '6px',
        fontSize: '16px',
        cursor: 'pointer',
      }}
    >
      🔄 Сбросить игру
    </button>

    <button
      onClick={() => setIsVsComputer(!isVsComputer)}
      style={{
        padding: '10px 20px',
        backgroundColor: '#2196F3',
        color: '#fff',
        border: 'none',
        borderRadius: '6px',
        fontSize: '16px',
        cursor: 'pointer',
      }}
    >
      🎮 Режим: {isVsComputer ? 'ИИ' : '1 на 1'}
    </button>
  </div>
</div>
  );
}
