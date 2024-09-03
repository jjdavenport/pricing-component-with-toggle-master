import Header from "./components/header";
import Footer from "./components/footer";
import data from "./components/assets/data.json";
import Card from "./components/card";
import { useState } from "react";

function App() {
  const header = data.header;
  const plans = data.plans;
  const [checked, setChecked] = useState(false);
  const toggle = () => setChecked(!checked);

  return (
    <>
      <div className="font-custom text-customSize text- flex h-full min-h-screen flex-col justify-between">
        <div className="flex flex-col items-center gap-4">
          <Header data={header} toggle={toggle} />
          <main className="flex flex-col gap-4">
            <ul className="flex flex-col gap-4">
              {plans.map((i, index) => (
                <li key={index}>
                  <Card
                    annual={i.annual}
                    toggle={checked}
                    name={i.name}
                    monthly={i.monthly}
                    storage={i.storage}
                    users={i.users}
                    send={i.send}
                    learn={i.learn}
                    gradient={i.gradient}
                  />
                </li>
              ))}
            </ul>
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
