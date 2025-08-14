import { ToastContainer } from "react-toastify";
import "./App.css";
import Routing from "./components/routing/Routing";
import { AuthProvider } from "./hooks/context";

const App = () => {
  return (
    <>
      <AuthProvider>
        <ToastContainer position="top-right"/>
        <Routing />
      </AuthProvider>
    </>
  );
};

export default App;
