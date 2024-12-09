import { createContext, useContext, useState } from 'react';

const SharedStateContext = createContext();

export function SharedStateProvider({ children }) {
  const [count, setCount] = useState(0);
  
  const value = {
    count,
    setCount,
  };

  return (
    <SharedStateContext.Provider value={value}>
      {children}
    </SharedStateContext.Provider>
  );
}

export function useSharedState() {
  const context = useContext(SharedStateContext);
  if (!context) {
    throw new Error('useSharedState must be used within SharedStateProvider');
  }
  return context;
}
