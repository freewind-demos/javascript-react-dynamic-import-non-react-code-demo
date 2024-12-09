import { useState, useRef } from 'react'

function App() {
  const containerRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const loadContent = async () => {
    if (!isLoaded) {
      const module = await import('./components/DynamicDom');
      module.initDynamicContent(containerRef.current);
      setIsLoaded(true);
    }
  }

  return (
    <div>
      <h1>React Dynamic Import Demo</h1>
      <button onClick={loadContent}>
        Load Dynamic Content
      </button>
      <div ref={containerRef}></div>
    </div>
  )
}

export default App
