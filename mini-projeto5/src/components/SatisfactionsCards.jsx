import React from 'react';
import './SatisfactionsCards.css'; // arrumar aqui depois ( nao sei se esta certo)
SatisfactionsCards from './SatisfactionsCards.jsx';

const SatisfactionsCard = ({ _id, userId, overallSatisfaction, date }) {
  
  return (
    <div className={styles.satisfaction-card}>
      <h2>ID: {_id}</h2>
      <p>User ID: {userId}</p>
      <p>Satisfação Geral: {overallSatisfaction}</p>
      <p>Data: {new Date(date).toLocaleDateString()}</p>
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
