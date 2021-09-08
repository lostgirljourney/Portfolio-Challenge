import "./SkillCard.css";

export default function SkillCard() {
	return (
		<div className="skill-card">
			<p className="skill-p">Front end</p>
			<div className="skills">
				<div className="row-s row1">
					<div className="skill-badge">
						<p className="skill-name">React</p>
						<div className="pro-ind">
							<div className="progress"></div>
							<div className="indicator i1"></div>
						</div>
					</div>
					<div className="skill-badge">
						<p className="skill-name">Javascript</p>
						<div className="pro-ind">
							<div className="progress"></div>
							<div className="indicator i2"></div>
						</div>
					</div>
					<div className="skill-badge">
						<p className="skill-name">CSS</p>
						<div className="pro-ind">
							<div className="progress"></div>
							<div className="indicator i3"></div>
						</div>
					</div>
				</div>
				<div className="row-s row2">
					<div className="skill-badge">
						<p className="skill-name">Vue</p>
						<div className="pro-ind">
							<div className="progress"></div>
							<div className="indicator i4"></div>
						</div>
					</div>
					<div className="skill-badge">
						<p className="skill-name">Redux</p>
						<div className="pro-ind">
							<div className="progress"></div>
							<div className="indicator i5"></div>
						</div>
					</div>
					<div className="skill-badge">
						<p className="skill-name">React Native</p>
						<div className="pro-ind">
							<div className="progress"></div>
							<div className="indicator i6"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
