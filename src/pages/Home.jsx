import HomeNavigator from "../components/HomeNavigator";

export default function Home() {
  return (
    <>
      <div className="home-page section-1">
        <label id="title-home-page">DIOVELE</label>
      </div>
      <div className="home-page section-2">
        <HomeNavigator />
      </div>
    </>
  );
}
