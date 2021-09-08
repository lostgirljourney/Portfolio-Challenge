import portfolioMain from "./../../assets/human.jpg";
import { ReactComponent as Mail } from "./mail.svg";
import { ReactComponent as Call } from "./call.svg";
import "./ProfileCard.css";

export default function ProfileCard() {
	return (
		<div className="profile-card">
			<img
				src={portfolioMain}
				alt="owner pfp"
				className="portfolio-owner-pic"
			/>
			<div className="details">
				<div className="row">
					<div>
						<p className="name">Billy Pearson</p>
						<p className="design">Front-end developer</p>
					</div>
					<div>
						<p className="p-flex pm">
							<Mail />
							billy@example.com
						</p>
						<p className="p-flex pc">
							<Call />
							(+603) 546 624 342
						</p>
					</div>
				</div>
				<p className="own-detail-p">
					Self-motivated developer, who is willing to learn and create
					outstanding UI applications.
					<br />
					<br />
					Donec aliquam est dui, vel vestibulum diam sollicitudin id.
					Quisque feugiat malesuada molestie.
				</p>
			</div>
		</div>
	);
}
