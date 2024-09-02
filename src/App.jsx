import Header from "./components/header";
import Footer from "./components/footer";
import data from "./components/assets/data.json";
import Card from "./components/card";

function App() {
  const header = data.header;
  const plans = data.plans;
  return (
    <>
      <Header data={header} />
      {plans.map((i, index) => (
        <Card
          key={index}
          name={i.name}
          monthly={i.monthly}
          storage={i.storage}
          users={i.users}
          send={i.send}
          learn={i.learn}
        />
      ))}
      <main></main>
      <Footer />
    </>
  );
}

export default App;
