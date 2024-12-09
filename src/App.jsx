import { useState } from 'react'
import { SharedStateProvider, useSharedState } from './context/SharedStateContext'

function AppContent() {
  const [DynamicComponent, setDynamicComponent] = useState(null)
  const { count, setCount } = useSharedState();

  const loadComponent = async () => {
    const module = await import('./components/DynamicComponent')
    setDynamicComponent(() => module.default)
  }

  return (
    <div>
      <h1>React Dynamic Import Demo</h1>
      <div>
        <p>Main Component Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>
          Increment from Main
        </button>
      </div>
      <button onClick={loadComponent} style={{ marginTop: '10px' }}>
        Load Dynamic Component
      </button>
      {DynamicComponent && (
        <div style={{ marginTop: '20px' }}>
          <DynamicComponent />
        </div>
      )}
    </div>
  )
}

function App() {
  return (
    <SharedStateProvider>
      <AppContent />
    </SharedStateProvider>
  )
}

export default App
