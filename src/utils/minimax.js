import { calculateWinner } from './calculaterWinner';

export function getBestMove(squares) {
  const best = minimax(squares, 'O');
  return best.index;
}

function minimax(squares, player) {
  const winnerData = calculateWinner(squares);
  if (winnerData.winner === 'X') return { score: -10 };
  if (winnerData.winner === 'O') return { score: 10 };
  if (squares.every((sq) => sq !== null)) return { score: 0 }; // ничья

  const moves = [];

  squares.forEach((val, idx) => {
    if (val === null) {
      const newSquares = [...squares];
      newSquares[idx] = player;

      const result = minimax(newSquares, player === 'O' ? 'X' : 'O');
      moves.push({
        index: idx,
        score: result.score,
      });
    }
  });

  // Выбираем лучший ход
  if (player === 'O') {
    return moves.reduce((best, move) => (move.score > best.score ? move : best));
  } else {
    return moves.reduce((best, move) => (move.score < best.score ? move : best));
  }
}
