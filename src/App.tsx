import { useEffect } from "react";
import Home from "./component/Home";


const App = () => {

useEffect(() => {
  window.scrollTo(0, 0);
}, [])

  return (
    <div className="mx-10 lg:mx-24">
      <Home />
    </div>
  );
};

export default App;
