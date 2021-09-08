import "./App.css";
import HobbiesCard from "./HobbiesCard/HobbiesCard";
import ProfileCard from "./ProfileCard/ProfileCard";
import ProjectCardHeader from "./ProjectCard/ProjectCardHeader";
import SkillCard from "./SkillCard/SkillCard";
import Footer from "./Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<ProfileCard />
			<SkillCard />
			<Router>
				<ProjectCardHeader />
			</Router>
			<HobbiesCard />
			<Footer />
		</div>
	);
}

export default App;
