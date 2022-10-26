import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import HomePage from '../../pages/home-page/home-page';
import PlaceCard from '../../components/place-card/place-card';
// import HomePageEmpty from '../../pages/home-page-empty/home-page-empty';
import LoginPage from '../../pages/login-page/login-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
// import PropertyNotLoggedPage from '../../pages/property-not-logged-page/property-not-logged-page';
import PropertyPage from '../../pages/property-page/property-page';


type AppPageProps = {
  placeCount: number;
  amountCount: number;
}

function App({placeCount, amountCount}: AppPageProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <HomePage placesCount={placeCount}>
              <PlaceCard amountCount={amountCount}/>
            </HomePage>
          }
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage />}
        />
        <Route
          path={AppRoute.Room}
          element={<PropertyPage />}
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
