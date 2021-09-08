import "./HobbiesCard.css";
import game from "./../../assets/game.jpg";
import cook from "./../../assets/cook.jpg";
import biking from "./../../assets/biking.jpg";

export default function HobbiesCard() {
	return (
		<div className="hobbies-card">
			<p className="hobby-p">Hobbies</p>
			<div className="hobbies">
				<div className="hobby hobby-1">
					<img src={game} alt="game" className="hobby-img" />
					<p className="hobby-head">Gaming</p>
					<p className="hobby-desc">
						Quisque feugiat malesuada molestie.
					</p>
				</div>
				<div className="hobby hobby-2">
					<img src={cook} alt="cook" className="hobby-img" />
					<p className="hobby-head">Cooking</p>
					<p className="hobby-desc">
						Quisque feugiat malesuada molestie.
					</p>
				</div>
				<div className="hobby hobby-3">
					<img src={biking} alt="biking" className="hobby-img" />
					<p className="hobby-head">Biking</p>
					<p className="hobby-desc">
						Quisque feugiat malesuada molestie.
					</p>
				</div>
			</div>
		</div>
	);
}
