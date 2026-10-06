import { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

type Version = 'one' | 'two';

const references: Record<Version, string> = {
  one: '/mirror/v1/index.html',
  two: '/mirror/v2/index.html',
};

function App() {
  const [version, setVersion] = useState<Version>(() => {
    const saved = localStorage.getItem('dental-version');
    return saved === 'two' ? 'two' : 'one';
  });

  useEffect(() => {
    localStorage.setItem('dental-version', version);
  }, [version]);

  return (
    <main className="reference-host">
      <nav className="version-nav" aria-label="Website version selector">
        <button className={version === 'one' ? 'active' : ''} onClick={() => setVersion('one')}>V1</button>
        <button className={version === 'two' ? 'active' : ''} onClick={() => setVersion('two')}>V2</button>
      </nav>
      <iframe
        key={version}
        className="reference-frame"
        title={version === 'one' ? 'Dentel Version One' : 'DentalOne Version Two'}
        src={references[version]}
        allow="fullscreen"
      />
    </main>
  );
}

export default App;

createRoot(document.getElementById('root')!).render(<App />);
