import { createContext, useContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
	//les etats de l'utilsateur
	const [user, setUser] = useState(null);

	// les fonctions permettant de changer l'etat de lutilsateur en se connectant ou se deconnectant
	// login prend en compte un parametre qui sera l'utilsateur
	const login = (user) => {
		setUser(user);
	};

	// la fonction logout deconnecte en renvoyant null dans la valeur user
	const logout = () => {
		setUser(null);
	};

	// le AuthContext.Provider permet de recuperer dans sa propriété valeur les differentes valeur et les transmettre comme props global
	return (
		<AuthContext.Provider value={{ user, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

//useAuth nous permettra d'utiliser les differentes methode et objet au sein d'authProvider
export const useAuth = () => {
	return useContext(AuthContext);
};
