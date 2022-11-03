import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Router/AppRouter";
import Navbar from "./Shared/Narvar"
import Footer from "./Shared/Footer"

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <AppRouter />
    <Footer />
    </BrowserRouter>
  );
}

export default App;
