import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reveal } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(decrement())}>-</button>
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      {isLogged && <h3>Secret info I shouldn't see</h3>}
      <div>
        <button onClick={() => dispatch(reveal())}>Reveal secret</button>
      </div>
    </div>
  );
}

export default App;
