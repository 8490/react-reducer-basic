import { useReducer } from "react";
import { initialState, reducer } from "./reducer";

const ReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { loading, dog, error } = state;

  const fetchDog = () => {
    setLoading(true);

    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setDog(data.message);
        setLoading(false);
      })
      .catch(() => {
        setError("HATA!! VERİLER ÇEKİLEMEDİ");
        setLoading(false);
      });
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <button
        onClick={fetchDog}
        disabled={loading}
        style={{ width: "200px", margin: "1rem" }}
      >
        Fetch Dog
      </button>
      {dog && <img src={dog} alt="" style={{ width: "400px" }} />}
      {error && <h2>{error}</h2>}
    </div>
  );
};

export default ReducerExample;
