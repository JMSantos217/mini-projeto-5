// src/SatisfactionsCards.js
import React from 'react';
import SatisfactionsCards from './components/SatisfactionsCards';

const SatisfactionsCards = ({ _id, userId, overallSatisfaction, date }) => {
  return (
    <div className='satisfaction-card'>
      <h2>ID: {_id}</h2>
      <p>User ID: {userId}</p>
      <p>Satisfação Geral: {overallSatisfaction}</p>
      <p>Data: {new Date(date).toLocaleDateString()}</p> {/* Formata a data */}
    </div>
  );
};

export default SatisfactionsCards;
console.log('Rendering SatisfactionsCards with:', { _id, userId, overallSatisfaction, date });

satisfactions.map((satisfaction) => {
  return (
    <SatisfactionsCards
      key={satisfaction._id}
      _id={satisfaction._id}
      userId={satisfaction.userId}
      overallSatisfaction={satisfaction.overallSatisfaction}
      date={satisfaction.date}
    />
  );
});
