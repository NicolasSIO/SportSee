import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/header/Header";
import Sidebar from "@/components/sidebar/Sidebar";
import Card from "@/components/card/Card";
import Activity from "@/components/activity/Activity";
import Session from "@/components/session/Session";
import Performance from "@/components/performance/Performance";
import Score from "@/components/score/Score";
import ErrorApi from "@/pages/error/Error";

import { total } from "../../_services/format";

import "./profil.css";

const Profil = () => {
  let { id } = useParams();
  const [user, setUser] = useState([]);
  const [activity, setActivity] = useState([]);
  const [session, setSession] = useState([]);
  const [performance, setPerformance] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    total(parseInt(id)).then((data) => {
      console.log("data: ", data);
      if (data.user !== null) {
        setUser(data.user.data);
        setActivity(data.activity.data);
        setPerformance(data.performance.data);
        setSession(data.session.data);
        setLoader(true);
      } else {
        setLoader(true);
        setError(true);
      }
    });
    // eslint-disable-next-line
  }, []);

  if (!loader) {
    return <div>Loading ...... </div>;
  }

  if (error) {
    return <ErrorApi />;
  }

  return (
    <div className="Profil">
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
                  <Session data={session}></Session>
                  <Performance data={performance}></Performance>
                  <Score data={user}></Score>
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
};

export default Profil;
