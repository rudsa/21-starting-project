import React, { useState, useEffect } from "react";

const Meals = () => {
  const [loadedMeals, setLoadedMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch("http://localhost:3000/meals", {
        method: "GET",
      });

      if (!response.ok) {
        //
      }

      const meals = await response.json();

      setLoadedMeals(meals);
    };

    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => {
        return <li key={meal.id}>{meal.name}</li>;
      })}
    </ul>
  );
};

export default Meals;
