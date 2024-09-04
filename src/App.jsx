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
      <div className="bg-mobile md:bg-desktop bg-imageMobile md:bg-imagesDesktop flex h-full min-h-screen flex-col justify-between bg-colors-veryLightGrayishBlue bg-no-repeat font-custom text-customSize">
        <div className="flex flex-1 flex-col items-center justify-center gap-10 p-4 py-10 font-bold md:p-0">
          <Header data={header} toggle={toggle} />
          <main className="flex w-full flex-col items-center gap-4 md:w-max">
            <ul className="flex w-full flex-col justify-center gap-4 md:w-max md:flex-1 md:flex-row md:items-center md:gap-0">
              {plans.map((i, index) => (
                <li className="lg:flex lg:flex-1" key={index}>
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
                    borderL={i.borderL}
                    borderR={i.borderR}
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
