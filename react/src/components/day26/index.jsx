import { useState } from "react";
const Day26 = () => {
	const [user, setUser] = useState({
		username: "",
		email: "",
		password: "",
	});
	return (
		<div className="day26">
			<h2
				style={{
					marginTop: "50px",
				}}
			>
				Steps
			</h2>
			<ul>
				<li>Create a user state using redux</li>
				<li>Update user state when input is changed</li>
				<li>Create a seperate component and display user data(Don't Pass it as Props) </li>
			</ul>
			<h3>Input</h3>
			<div className="input">
				<input
					type="text"
					placeholder="Name"
					onChange={(e) => {
						setUser({ ...user, username: e.target.value });
					}}
				/>
				<input
					type="text"
					placeholder="Email"
					onChange={(e) => {
						setUser({ ...user, email: e.target.value });
					}}
				/>
			</div>

			<h3>Data </h3>
			<h6>Username : {user.username}</h6>
			<h6>Email : {user.email}</h6>
		</div>
	);
};

export default Day26;
