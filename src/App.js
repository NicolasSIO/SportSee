import "./App.css";
import Header from "@/components/header/Header";
import Sidebar from "@/components/sidebar/Sidebar";
import Card from "@/components/card/Card";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Sidebar />
        <main className="main-container">
          <p className="welcome">
            Bonjour <span className="name">Thomas</span>
          </p>
          <p className="congrats">
            Félicitation ! Vous avez explosé vos objectifs hier 👏
          </p>
          <div className="content">
            <section className="graphs">
              <article>
                <div className="barchart"></div>
                <div className="charts">
                  <div className="little-charts"></div>
                  <div className="little-charts"></div>
                  <div className="little-charts"></div>
                </div>
              </article>
            </section>
            <aside>
              <Card
                quantity="1,930kCal"
                icon="/assets/icons/fire.svg"
                category="Calories"
              ></Card>
              <Card
                quantity="155g"
                icon="/assets/icons/chicken.svg"
                category="Protéines"
              ></Card>
              <Card
                quantity="290g"
                icon="/assets/icons/apple.svg"
                category="Glucides"
              ></Card>
              <Card
                quantity="50g"
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
