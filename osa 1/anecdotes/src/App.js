import { useState } from "react";

const Anecode = ({text, countOfVotes}) => {
return (
  <>
  {text}
  <div>has {countOfVotes} votes</div>
  </>
)
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0, 0]);

  const next = () => {
    let nextSelected = selected
    while (nextSelected === selected) {
      nextSelected = Math.floor(Math.random()*anecdotes.length)
    }

    setSelected(nextSelected)
  }

  let most_votes = 0
  for (let i = 0; i < votes.length; i++) {
    if(votes[i] > votes[most_votes]){
      most_votes = i
    }
  }

  const vote = () => {
    const newVote = [...votes]
    newVote[selected] += 1
    setVotes(newVote)
  }


  return (
    <div>
      <h3>Anecode of the day is:</h3>
      <Anecode text={anecdotes[selected]} countOfVotes={votes[selected]}/>
      <br />

      <button onClick={vote}>Vote</button>
      <button onClick={next}>Next Anecode</button>

      <h3>Most voted Anecode:</h3>
      <Anecode text={anecdotes[most_votes]} countOfVotes={votes[most_votes]}/>
    </div>
  );
};

export default App;
