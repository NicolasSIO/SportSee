import { useEffect, useState } from "react";
import Header from "@/components/header/Header";
import Sidebar from "@/components/sidebar/Sidebar";
import Card from "@/components/card/Card";
import Activity from "@/components/activity/Activity";

import { userMainData } from "./_services/user.service";
import { userActivity } from "./_services/activity.service";
import "./App.css";

function App() {
  const [user, setUser] = useState([]);
  const [activity, setActivity] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    userMainData.getUserMainData(12).then((res) => {
      setUser(res.data.data);
      setLoader(true);
    });
    userActivity.getUserActivity(12).then((res) => {
      setActivity(res.data.data);
      setLoader(true);
    });
    // eslint-disable-next-line
  }, []);

  if (!loader) {
    return <div>Loading ...... </div>;
  }

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Sidebar />
        <main className="main-container">
          <p className="welcome">
            Bonjour <span className="name">{user.userInfos.firstName}</span>
          </p>
          <p className="congrats">
            Félicitation ! Vous avez explosé vos objectifs hier 👏
          </p>
          <div className="content">
            <section className="graphs">
              <article>
                <Activity data={activity}></Activity>
                <div className="charts">
                  <div className="little-charts"></div>
                  <div className="little-charts"></div>
                  <div className="little-charts"></div>
                </div>
              </article>
            </section>
            <aside>
              <Card
                quantity={user.keyData.calorieCount}
                icon="/assets/icons/fire.svg"
                category="Calories"
              ></Card>
              <Card
                quantity={user.keyData.proteinCount}
                icon="/assets/icons/chicken.svg"
                category="Protéines"
              ></Card>
              <Card
                quantity={user.keyData.carbohydrateCount}
                icon="/assets/icons/apple.svg"
                category="Glucides"
              ></Card>
              <Card
                quantity={user.keyData.lipidCount}
                icon="/assets/icons/burger.svg"
                category="Lipides"
              ></Card>
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
