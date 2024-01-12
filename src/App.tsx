import "./App.css";
import { Landing } from "./components/landing";
import { userRequests } from "./userapi";

function App() {
  console.log(userRequests.getUserByNameOrEmail("feng"));

  return (
    <>
      <Landing />
    </>
  );
}

export default App;
