import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import SatisfactionsCards from './components/SatisfactionsCards';

export default function App() {
  const [satisfactions, setSatisfactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadSatisfactions = async () => {
      try {
        const response = await axios.get('http://localhost:5000/satisfaction');
        setSatisfactions(response.data.satisfaction);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar satisfações', error);
        setError('Erro ao buscar satisfações');
        setLoading(false);
      }
    };

    loadSatisfactions();
  }, []);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className='App'>
      <h1>Satisfação do Cliente</h1>
      <div className='satisfactions-list'>
        {satisfactions.length > 0 ? (
          satisfactions.map((satisfaction) => (
            <SatisfactionsCards
              key={satisfaction._id}
              _id={satisfaction._id}
              userId={satisfaction.userId}
              overallSatisfaction={satisfaction.overallSatisfaction}
              date={satisfaction.date}
            />
          ))
        ) : (
          <p>Nenhuma satisfação encontrada</p>
        )}
      </div>
    </div>
  );
}
