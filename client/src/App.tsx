import { useEffect, useState } from "react";
import { getHealth } from "./services/api/health";

function App() {
  const [message, setMessage] = useState("Connecting to API...");

  useEffect(() => {
    async function checkApi() {
      try {
        const response = await getHealth();

        setMessage(response.message);
      } catch {
        setMessage("Could not connect to API");
      }
    }

    checkApi();
  }, []);

  return (
    <main>
      <h1>Career Agent</h1>
      <p>{message}</p>
    </main>
  );
}

export default App;