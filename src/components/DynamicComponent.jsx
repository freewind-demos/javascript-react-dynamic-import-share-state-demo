import { useSharedState } from '../context/SharedStateContext';

function DynamicComponent() {
  const { count, setCount } = useSharedState();

  return (
    <div style={{
      padding: '20px',
      border: '2px solid #007bff',
      borderRadius: '8px',
      backgroundColor: '#f8f9fa'
    }}>
      <h2>Dynamic Component</h2>
      <p>This component was loaded dynamically!</p>
      <div>
        <p>Dynamic Component Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>
          Increment from Dynamic Component
        </button>
      </div>
    </div>
  )
}

export default DynamicComponent
