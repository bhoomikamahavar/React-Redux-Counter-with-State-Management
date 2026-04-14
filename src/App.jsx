import { useSelector } from "react-redux";
import "./App.css";
import { increment, decrement, reset } from "./actions";
import { useDispatch } from "react-redux";
function App() {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "20px", alignItems: "center", padding: "100px 20px" }}>
        <h1>Redux Counter App</h1>
        <h2>{count}</h2>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
          <button className="btn" onClick={() => dispatch(increment())}>Increment +</button>
          <button className="btn" onClick={() => dispatch(decrement())}>Decrement -</button>
          <button className="btn" onClick={() => dispatch(reset())}>Reset</button>
        </div>
      </div>
    </>
  );
}

export default App;