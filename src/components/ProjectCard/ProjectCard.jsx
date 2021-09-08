import "./ProjectCard.css";

export default function ProjectCard(props) {
	return (
		<div className="project-card">
			<img src={props.pic} alt="checkout pfp" className="project-pic" />
			<div className="detail">
				<p className="tag">{props.tags}</p>
				<p className="pro-name">{props.name}</p>
				<p className="project-details">{props.details}</p>
				<div>
					<a
						href={props.demo}
						target="_blank"
						rel="noopener noreferrer"
					>
						<button className="demo">Demo</button>
					</a>
					<a
						href={props.code}
						target="_blank"
						rel="noopener noreferrer"
					>
						<button className="code">Code</button>
					</a>
				</div>
			</div>
		</div>
	);
}
