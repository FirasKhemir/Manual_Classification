import WelcomeMessage from "./WelcomeMessage";
import FilesButton from "./FilesButton";
import CircleArrowButton from "./ArrowCircle";
import "./Home.css";

function Home() {
  return (
    <div>
    <div className="home flex flex-col items-center">
      <WelcomeMessage />
      <FilesButton />
    </div>
    <div>
      <CircleArrowButton direction="left" onClick={() => console.log("Left clicked!")} />
    </div>
    </div>
      );
}
export default Home;
