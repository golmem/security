import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./Auth";

export const Menu = () => {
	//j'importe useAuth pour voir si l'utilisateur est a null ou a une valeur
	// si user est null le lien mon profil n'apparaitra pas
	// si user a une valeur le lien connexion disparait

	const auth = useAuth();
	//on regarde ce qu'il ya à l'interieur de la variable auth
	//console.log(auth);

	return (
		<nav>
			<Link to={"/"}>Home</Link>
			{!auth.user && <Link to={"login"}>Connexion</Link>}
			{auth.user && <Link to={"page"}>Mon profil</Link>}
		</nav>
	);
};
