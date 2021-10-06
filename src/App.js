import "./styles.css";
import React, { useState } from "react";
import { AddThoughtForm } from "./AddThoughtForm";
import { Thought } from "./Thought";
import { generateId, getNewExpirationTime } from "./utilities";

export default function App() {
  const [thoughts, setThoughts] = useState([
    {
      id: generateId(),
      text: "This is a place for your passing thoughts.",
      expiresAt: getNewExpirationTime()
    },
    {
      id: generateId(),
      text: "They'll be removed after 15 seconds.",
      expiresAt: getNewExpirationTime()
    }
  ]);

  const addThought = (thought) => {
    setThoughts((prev) => [thought, ...prev]);
  };

  const removeThought = (idToRemove) => {
    setThoughts((thoughts) =>
      thoughts.filter((thought) => thought.id !== idToRemove)
    );
  };

  return (
    <div className="App">
      <header>
        <h1>Passing Thoughts</h1>
      </header>
      <main>
        <AddThoughtForm addThought={addThought} />
        {thoughts.length > 0 ? (
          <ul className="thoughts">
            {thoughts.map((thought) => (
              <Thought
                key={thought.id}
                thought={thought}
                removeThought={removeThought}
              />
            ))}
          </ul>
        ) : (
          <h3>No More Thoughts!</h3>
        )}
      </main>
    </div>
  );
}
