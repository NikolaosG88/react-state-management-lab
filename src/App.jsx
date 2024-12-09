// src/App.jsx

import React, { useState } from "react";
import './App.css';
import { use } from "react";

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
  let totalStrength = 0;
  let totalAgility = 0;
  // let totalBudget = 0;

  for (let i = 0; i < zombieFighters.length; i++) {
    totalPrice += zombieFighters[i].price;
  }

  for (let s = 0; s < zombieFighters.length; s++) {
    totalStrength += zombieFighters[s].strength;
  }

  for (let a = 0; a < zombieFighters.length; a++) {
    totalAgility += zombieFighters[a].agility;
  }

  // for (let b = 0; b < zombieFighters.length; b++) {
  //   totalBudget += zombieFighters[b].price;
  // }


  const [currentPrice, setCurrentPrice] = useState(totalPrice);
  const [currentStrength, setCurrentStrength] = useState(0);
  const [currentAgility, setCurrentAgility] = useState(0);
  // const [currentBudget, setCurrentBudget] = useState(0);

  const handleAddFighter = (fighter) => {
    if (money < fighter.price) {
      console.log('Not enough money');
      return;
    }
    setTeam((prevTeam) => [...prevTeam, fighter]);
    setMoney((prevMoney) => prevMoney - fighter.price);
    setCurrentPrice((prevTotal) => prevTotal - fighter.price);
    setCurrentStrength((prevStrength) => prevStrength + fighter.strength);
    setCurrentAgility((prevAgility) => prevAgility + fighter.agility);
    // setCurrentStrength((prevBudget) => prevBudget + fighter.price);
  };

  const handleRemoveFighter = (fighter) => {
    setTeam((prevTeam) => prevTeam.filter((f) => f !== fighter));
    setMoney((prevMoney) => prevMoney + fighter.price);
    setCurrentStrength((prevStrength) => prevStrength - fighter.strength);
    setCurrentAgility((prevAgility) => prevAgility - fighter.agility);
  };
  

  return (
    <div>
      <h1>Zombie Fighters</h1>
      <h2>Initial Total Price: {totalPrice} £</h2>
      <h2>Current Total Price: {currentPrice} £</h2>
      <h2>Available Money Left: {money} £</h2>
      <h2>Total Strength: {totalStrength} ^ </h2>
      <h2>Teams  Agility: {totalAgility}  </h2>
      {/* <h2>Total Strength: {totalBudget}  </h2> */}

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

      <h1>Your Team</h1>
      <h2><strong>Current Strength:</strong> <strong>{currentStrength}</strong> </h2>
      <h2><strong>Current Agility:</strong> <strong>{currentAgility}</strong> </h2>
    {team.length === 0 ? ( <strong><p><h2>Pick some team members!</h2></p></strong>
     ) : ( 
      <ul>
       {team.map((fighter, index) => (
            <li key={index}>
              <img src={fighter.img} alt={fighter.name} />
              <p><strong>Name:</strong> {fighter.name}</p>
              <p><strong>Price:</strong> {fighter.price} £</p>
              <p><strong>Strength:</strong> {fighter.strength}</p>
              <p><strong>Agility:</strong> {fighter.agility}</p>
              <button onClick={() => handleRemoveFighter(fighter)}>Remove Fighter</button>
            </li>
        ))}
      </ul>
     )}
    </div>
  );
}

export default App;
