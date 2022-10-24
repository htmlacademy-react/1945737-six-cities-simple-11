import HomePage from '../../pages/home-page/home-page';
import PlaceCard from '../../components/place-card/place-card';

type AppPageProps = {
  placeCount: number;
  amountCount: number;
}

function App({placeCount, amountCount}: AppPageProps): JSX.Element {
  return (
    <HomePage placesCount={placeCount}>
      <PlaceCard amountCount={amountCount}/>
    </HomePage>
  );
}

export default App;
