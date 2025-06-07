import React, { useState } from "react";
import "./home.css";

const projects = [
	{
		name: "Portfolio Website",
		description: (
			<ul className="project-bullets ">
				<li>This is my personal portfolio website</li>
				<li>Built using React</li>
				<li>Highlights the projects I’ve worked on</li>
				<li>Showcases the skills I’ve developed</li>
				<li>Designed to give a clear and simple overview of what I can do</li>
			</ul>
		),
		github: "https://github.com/Michael-Jebaraj/portfolio",
		live: "https://full-stack-portfolio-wsmt.onrender.com/",
	},
	{
		name: "MentorSpark",
		description: (
			<ul className="project-bullets">
				<li>
					A mentorship booking platform developed during an internship at
					Workcohol
				</li>
				<li>Built as a group project with collaborative teamwork</li>
				<li>
					Allows users to browse mentor profiles and schedule sessions easily
				</li>
				<li>
					Features a simple and intuitive booking system for reserving
					mentorship slots
				</li>
				<li>
					Developed both frontend and backend parts to ensure smooth
					functionality
				</li>
				<li>
					Designed for a seamless and user-friendly experience connecting
					mentors and mentees
				</li>
			</ul>
		),
		github: "https://github.com/Michael-Jebaraj/Mentorship_Booking_Platform",
	},
	{
		name: "FitnessLibrary",
		description: (
			<ul className="project-bullets">
				<li>
					Developed a full-stack fitness app that creates personalized workout
					routines based on user input
				</li>
				<li>
					Collects user details: email, name, bodyweight, height, fitness goal
					(muscle gain, loss, or maintenance), and training days per week
				</li>
				<li>
					Generates a daily exercise plan with sets represented by clickable
					checkboxes for easy tracking
				</li>
				<li>
					Features two progress bars to monitor daily and weekly workout
					completion, updating automatically as users check sets
				</li>
				<li>
					Automatically resets progress bars at the start of each new week for
					fresh tracking
				</li>
				<li>
					Built frontend using React for smooth, interactive user experience
				</li>
				<li>
					Used MongoDB as the database to store user data and workout progress
				</li>
			</ul>
		),
		github: "https://github.com/Michael-Jebaraj/FitnessLibrary",
		live: "https://fitnesslibrary-1.onrender.com",
	},
];

const Home = () => {
	const [openProject, setOpenProject] = useState(null);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [formSubmitted, setFormSubmitted] = useState(false);

	const handleProjectClick = (index) => {
		setOpenProject(index);
	};

	const handleCloseProject = () => {
		setOpenProject(null);
	};

	const handleFormChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		await fetch("https://formspree.io/f/myzjkjrb", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(formData),
		});
		setFormData({ name: "", email: "", message: "" });
		setFormSubmitted(true);
		setTimeout(() => setFormSubmitted(false), 4000);
	};

	return (
		<div className="home-bg">
			<div className="main-content">
				<div className="left-section">
					<img
						src="/Michael.jpg"
						alt="Profile"
						className="profile-img"
					/>
					<div className="welcome-title">J Michael Jebaraj</div>
					<div className="about-text">
						Hi, I’m Michael, a passionate Full Stack Developer. I enjoy building
						scalable web applications using the MERN stack. I’m eager to learn and
						love creating clean, efficient solutions to real problems.
						<br />
						<br></br>
						Mail :{" "}
						<a href="mailto:michaeljebaraj29@gmail.com">
							michaeljebaraj29@gmail.com
						</a>
						<br />
						<br></br>
						GitHub :{" "}
						<a
							href="https://github.com/Michael-Jebaraj"
							target="_blank"
							rel="noopener noreferrer"
						>
							https://github.com/Michael-Jebaraj
						</a>
						<br />
						<br></br>
						LinkedIn :{" "}
						<a
							href="https://www.linkedin.com/in/jmichaeljebaraj"
							target="_blank"
							rel="noopener noreferrer"
						>
							https://www.linkedin.com/in/jmichaeljebaraj
						</a>
					</div>
				</div>
				<div className="resume-sidebar">
					<div className="resume-preview-container">
						<div className="resume-title">Resume</div>
						<a
							href="/Michael_Resume.pdf"
							target="_blank"
							rel="noopener noreferrer"
							className="resume-preview-link"
							title="View Resume"
						>
							<iframe
								src="/Michael_Resume.pdf"
								title="Resume Preview"
								className="resume-preview-iframe"
							></iframe>
							<div className="resume-preview-overlay">View Resume</div>
						</a>
					</div>
				</div>
			</div>
			{/* Skills section BELOW main-content */}
			<div className="skills-content">
	<div className="skills-title">Skills</div>
	<div className="skills-marquee-wrapper">
		<div className="skills-track">
			{[
  { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", dark: true },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "HTML & CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "REST APIs", logo: "/api-icon.svg", customColor: true },
  { name: "Git & GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", dark: true },
]
.concat(
				[
  { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", dark: true },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "HTML & CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "REST APIs", logo: "/api-icon.svg", customColor: true },
  { name: "Git & GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", dark: true },
]

			).map((skill, idx) => (
				<div className="skill-item" key={idx}>
					<img src={skill.logo} alt={skill.name} className="skill-icon" />
					<span>{skill.name}</span>
				</div>
			))}
		</div>
	</div>
</div>
			{/* Projects section BELOW skills-content */}
			<div className="projects-content">
				<div className="projects-title">Projects</div>
				<div className="projects-instruction">
					Click a project title to view details
				</div>
				<ul className="project-list">
					{projects.map((project, idx) => (
						<li key={project.name}>
							<div
								className="project-link"
								onClick={() => handleProjectClick(idx)}
								tabIndex={0}
								role="button"
							>
								{project.name}
								<span className="chevron-icon">▼</span>
							</div>
						</li>
					))}
				</ul>
			</div>
			{/* Always render the detail section for consistent animation */}
			<div
				className={`project-detail-section${
					openProject !== null ? " open" : ""
				}`}
			>
				<div
					className={`project-detail-inner${
						openProject !== null ? " show" : ""
					}`}
					key={openProject !== null ? projects[openProject].name : "empty"}
				>
					{openProject !== null && (
						<>
							<button
								className="close-btn"
								onClick={handleCloseProject}
								aria-label="Close"
							>
								&times;
							</button>
							<h3>{projects[openProject].name}</h3>
							<p>{projects[openProject].description}</p>
							<a
								href={projects[openProject].github}
								target="_blank"
								rel="noopener noreferrer"
								className="project-btn"
							>
								<img
									src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
									alt="GitHub"
									className="github-logo"
								/>
								GitHub
							</a>
							{projects[openProject].live && (
								<a
									href={projects[openProject].live}
									target="_blank"
									rel="noopener noreferrer"
									className="project-btn"
								>
									Live Server
								</a>
							)}
						</>
					)}
				</div>
			</div>
			{/* Experience section BELOW projects-content */}
			<div className="experience-content">
				<div className="experience-title">Experience</div>
				<ul className="experience-list">
					<li>
						<b>Full Stack Developer Intern</b> – Workcohol Private Limited
						<br />
						<span>January 2025 - March 2025</span>
						<br />
						<br />
						<ul className="experience-bullets">
							<li>
								Worked as a full stack developer handling both frontend and
								backend tasks during the internship.
							</li>
							<li>
								Built and maintained responsive web applications using React for
								frontend and Django for backend.
							</li>
							<li>
								Developed APIs and integrated databases to support dynamic features
								and user data management.
							</li>
							<li>
								Collaborated with the team remotely to deliver project milestones
								on time.
							</li>
							<li>
								Gained hands-on experience in end-to-end software development
								lifecycle.
							</li>
						</ul>
					</li>
				</ul>
			</div>
			{/* Contact section BELOW experience-content */}
			<div className="contact-content">
				<div className="contact-title">Contact Me</div>
				<form className="contact-form" onSubmit={handleFormSubmit}>
					<input
						type="text"
						name="name"
						placeholder="Name"
						className="contact-input"
						required
						value={formData.name}
						onChange={handleFormChange}
					/>
					<input
						type="email"
						name="email"
						placeholder="Email"
						className="contact-input"
						required
						value={formData.email}
						onChange={handleFormChange}
					/>
					<textarea
						name="message"
						placeholder="Message"
						className="contact-textarea"
						rows="5"
						required
						value={formData.message}
						onChange={handleFormChange}
					/>
					<button type="submit" className="contact-btn">
						Send
					</button>
					{formSubmitted && (
						<div className="success-message">
							Thank you! Your message has been sent.
						</div>
					)}
				</form>
			</div>
		</div>
	);
};

export default Home;
