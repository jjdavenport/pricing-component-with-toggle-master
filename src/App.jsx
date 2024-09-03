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
      <div className="font-custom text-customSize bg-imageTop bg-colors-veryLightGrayishBlue bg-topRight flex h-full min-h-screen flex-col justify-between bg-no-repeat font-bold">
        <div className="flex flex-1 flex-col items-center justify-center gap-10 p-4 py-10">
          <Header data={header} toggle={toggle} />
          <main className="flex h-full w-full flex-col items-center gap-4">
            <ul className="flex h-full w-full flex-col justify-center gap-4 md:flex-row md:gap-0">
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
                    dollar={i.dollar}
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
