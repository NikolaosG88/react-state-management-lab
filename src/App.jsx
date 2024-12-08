// src/App.jsx

import React, { useState } from "react";
import './App.css';

const App = () => {

  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState([
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://via.placeholder.com/150/92c952',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://via.placeholder.com/150/771796',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://via.placeholder.com/150/24f355',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/d32776',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://via.placeholder.com/150/1ee8a4',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://via.placeholder.com/150/66b7d2',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://via.placeholder.com/150/56acb2',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://via.placeholder.com/150/8985dc',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://via.placeholder.com/150/392537',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/602b9e',
    },
  ]);


  let totalPrice = 0;
  for (let i = 0; i < zombieFighters.length; i++) {
    totalPrice += zombieFighters[i].price;
  }


  const [currentPrice, setCurrentPrice] = useState(totalPrice);

  const handleAddFighter = (fighter) => {
    if (money < fighter.price) {
      console.log('Not enough money');
      return;
    }
    setTeam((prevTeam) => [...prevTeam, fighter]);
    setMoney((prevMoney) => prevMoney - fighter.price);
    setCurrentPrice((prevTotal) => prevTotal - fighter.price);
  };

  return (
    <div>
      <h1>Zombie Fighters</h1>
      <h2>Initial Total Price: {totalPrice} £</h2>
      <h2>Current Total Price: {currentPrice} £</h2>
      <h2>Available Money: {money} £</h2>
      <ul>
        {zombieFighters.map((fighter, index) => (
          <li key={index}>
            <img src={fighter.img} alt={fighter.name} />
            <p><strong>Name:</strong> {fighter.name}</p>
            <p><strong>Price:</strong> {fighter.price} £</p>
            <p><strong>Strength:</strong> {fighter.strength}</p>
            <p><strong>Agility:</strong> {fighter.agility}</p>
            <button onClick={() => handleAddFighter(fighter)}>Add Fighter</button>
          </li>
        ))}
      </ul>

      <h2>Your Team</h2>
      <ul>
        {team.map((fighter, index) => (
          <li key={index}>{fighter.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
