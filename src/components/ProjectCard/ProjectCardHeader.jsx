import styled from "styled-components";
import ProjectCard from "./../ProjectCard/ProjectCard";
import { all, react, responsive } from "./object";
import { Switch, Route, Link } from "react-router-dom";

export default function ProjectCardHeader() {
	const allProject = all.map((ele) => {
		return (
			<ProjectCard
				key={all.indexOf(ele)}
				pic={require("./../../assets/" + ele.pic + ".png").default}
				tags={ele.tags}
				name={ele.name}
				details={ele.details}
				demo={ele.demo}
				code={ele.code}
			/>
		);
	});
	const reactProject = react.map((ele) => {
		return (
			<ProjectCard
				key={all.indexOf(ele)}
				pic={require("./../../assets/" + ele.pic + ".png").default}
				tags={ele.tags}
				name={ele.name}
				details={ele.details}
				demo={ele.demo}
				code={ele.code}
			/>
		);
	});
	const responsiveProject = responsive.map((ele) => {
		return (
			<ProjectCard
				key={all.indexOf(ele)}
				pic={require("./../../assets/" + ele.pic + ".png").default}
				tags={ele.tags}
				name={ele.name}
				details={ele.details}
				demo={ele.demo}
				code={ele.code}
			/>
		);
	});

	const style = {
		textDecoration: "none",
	};

	const Div = styled.div`
		margin: 92px auto 0;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 22px;
		background-color: #ffffff;
		border-radius: 12px;
		height: 100px;

		@media only screen and (min-width: 1070px) {
			width: 1000px;
		}

		@media only screen and (max-width: 1070px) {
			width: 800px;
		}

		@media only screen and (max-width: 870px) {
			margin: 25px auto 0;
			width: 450px;
		}

		@media only screen and (max-width: 520px) {
			width: 330px;
		}
	`;

	const DivB = styled.div`
		display: flex;
		flex-direction: row;
	`;

	const Project = styled.p`
		font-weight: 500;
		font-size: 24px;
		line-height: 29px;
		color: #4f4f4f;
	`;

	const Button = styled.button`
		width: auto;
		height: auto;
		border: 1px solid #4f4f4f;
		box-sizing: border-box;
		border-radius: 12px;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		text-decoration: none;
		color: #4f4f4f;
		font-weight: 500;
		font-size: 14px;
		line-height: 17px;
		padding: 8px 22px;
		margin-right: 16px;

		&:hover {
			border: 1px solid #2f80ed;
			color: #2f80ed;
		}

		&:active,
		&:focus,
		&:focus-within {
			background-color: #2f80ed;
			border: 1px solid #2f80ed;
			color: #ffffff;
		}
	`;

	function AllProject() {
		return <div>{allProject}</div>;
	}

	function ResponsiveProject() {
		return <div>{responsiveProject}</div>;
	}

	function ReactProject() {
		return <div>{reactProject}</div>;
	}

	return (
		<>
			<Div>
				<Project>Projects (3)</Project>

				<DivB>
					<Link to="/" style={style}>
						<Button>All</Button>
					</Link>
					<Link to="/responsive" style={style}>
						<Button>Responsive</Button>
					</Link>
					<Link to="/react" style={style}>
						<Button>React</Button>
					</Link>
				</DivB>
			</Div>
			<Switch>
				<Route exact path="/" component={AllProject}></Route>
				<Route
					exact
					path="/responsive"
					component={ResponsiveProject}
				></Route>
				<Route exact path="/react" component={ReactProject}></Route>
			</Switch>
		</>
	);
}
