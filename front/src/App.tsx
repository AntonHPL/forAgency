import './App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import EnterForm from './components/EnterForm';
import Account from './components/Account';
import ProfileForm from './components/ProfileForm';
import { useAppSelector } from "./store";

const App = () => {
  const { user } = useAppSelector(({ user }) => user);

  return (
    <Router>
      <Header user={user} text={user.id ? `${user.name} ${user.surname}` : "Вход в аккаунт"} />
      <Routes>
        <Route path="/enter-form" element={<EnterForm />} />
        {user.id ?
          <>
            <Route path="/account" element={<Account />} />
            <Route path="/profile-form" element={<ProfileForm user={user} />} />
            <Route path="*" element={<Navigate to="/account" />} />
          </> :
          <Route path="*" element={<Navigate to="/enter-form" />} />
        }
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
