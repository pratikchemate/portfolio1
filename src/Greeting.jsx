import React, { useState, useEffect } from "react";

const Greeting = () => {
  const [greeting, setGreeting] = useState("");

  const updateGreeting = () => {
    const hour = new Date().getHours();

    if (hour < 12) {
      setGreeting("Good Morning!");
    } else if (hour < 18) {
      setGreeting("Good Afternoon!");
    } else {
      setGreeting("Good Evening!");
    }
  };

  useEffect(() => {
    updateGreeting(); // set initially
    const interval = setInterval(updateGreeting, 60 * 1000); // update every minute
    return () => clearInterval(interval); // cleanup
  }, []);

  return <span>{greeting}</span>;
};

export default Greeting;
