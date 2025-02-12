import React, { useRef, useCallback } from 'react';
import { Header, NeoGrid } from './components';

const App: React.FC = () => {
  const clearGridRef = useRef<() => void>(() => {});
  const copyGridRef = useRef<() => void>(() => {});

  const handleClear = useCallback(() => {
    clearGridRef.current();
  }, []);

  const handleCopy = useCallback(() => {
    copyGridRef.current();
  }, []);

  return (
    <div>
      <Header onClear={handleClear} onCopy={handleCopy} />
      <NeoGrid
        onClearRef={(clearFn) => {
          clearGridRef.current = clearFn;
        }}
        onCopyRef={(copyFn) => {
          copyGridRef.current = copyFn;
        }}
      />
    </div>
  );
};

export default App;