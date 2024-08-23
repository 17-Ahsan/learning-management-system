import "bootstrap/dist/css/bootstrap.css";
import Login from "./LoginRegistarationComponents/Login";
import RegistrationPage from "./Pages/RegistrationPage";
import StudentDashboardPage from "./Pages/StudentDashboardPage";
import { BrowserRouter as Router, Route, Routes }from "react-router-dom";
import TeacherDashboardPage from "./TeacherDashboard/TeacherPage";

function App() {
/*   const [pageName, setPageName] = useState("Login");
  const changePageHandeler = (e) => {
    setPageName(e);
  }; */
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<StudentDashboardPage />} />
          <Route path="/Registration" element={<RegistrationPage />} />
          <Route path="/Tdashboard" element={<TeacherDashboardPage />} />
        </Routes>
      </Router>




     {/*   <StudentDashboardPage /> */}
    </>
  );
}

export default App;
