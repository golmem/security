import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./Auth";

export const MaPage = () => {
	const auth = useAuth();
	const navigate = useNavigate();

	const handleLogout = () => {
		auth.logout();
		navigate("/");
	};
	return (
		<div>
			<h1>bienvenue </h1>
			<p>Profil de {auth.user}</p>
			<button onClick={handleLogout}>Logout</button>
		</div>
	);
};
