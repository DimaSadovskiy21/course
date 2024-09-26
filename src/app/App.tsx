import { useTheme } from "app/providers/ThemeProvider/lib/useTheme";
import AppRouter from "app/providers/router";
import Navbar from "widgets/Navbar";
import Sidebar from "widgets/Sidebar";
import { classNames } from "shared/lib/classNames/classNames";
import "./styles/index.scss";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <header>
        <Navbar />
      </header>
      <main className="main">
        <Sidebar />
        <AppRouter />
      </main>
    </div>
  );
};

export default App;
