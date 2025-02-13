import WelcomeMessage from "./WelcomeMessage";
import FilesButton from "./FilesButton";
import "./Home.css";


function Home() {
  return (
    <div className="home flex items-center">
      <WelcomeMessage />
      <FilesButton />
    </div>
      );
}
export default Home;
