
import Game from './components/Game';

export default function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '98vh',
        fontFamily: 'sans-serif',
        margin: 0,
        textAlign: 'center',
      }}
    >
      <h1 style={{ fontSize: '1.9rem', marginBottom: '1rem' }}>❌ Крестики-нолики ⭕</h1>
      <Game />
    </div>
  );
}
