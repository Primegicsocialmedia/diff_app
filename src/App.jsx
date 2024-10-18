import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import Router from "./router/router";

const App = () => {
  return (
    <div className="w-full">
      <Header />
      <div className="bg-gray-100 max-w-7xl mx-auto">
        <Router />
      </div>
      <Footer/>
    </div>
  );
};

export default App;
