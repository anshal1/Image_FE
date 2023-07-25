import Card from "./Components/Card/Card";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Card
        img={
          "https://cdn.vox-cdn.com/thumbor/KlIlVaMxSyV61YxibUZhaTAcf7k=/0x0:3840x2160/1200x675/filters:focal(1613x773:2227x1387)/cdn.vox-cdn.com/uploads/chorus_image/image/69919398/Pokemon_UNITE___Team_Up._Take_Down.___Screenshot_1.0.png"
        }
      />
    </>
  );
}
export default App;
