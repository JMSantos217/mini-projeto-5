import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

satisfactions.map((satisfaction) => {
  console.log(satisfaction); // Aqui
  return (
    <SatisfactionsCards
      key={satisfaction._id}
      titulo={satisfaction.titulo}
      genero={satisfaction.genero}
      temporadas={satisfaction.temporadas}
    />
  );
})
