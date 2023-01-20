import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./composants/Auth";
import { Authenticate } from "./composants/Authenticate";
import { Home } from "./composants/Home";
import { Login } from "./composants/Login";
import { MaPage } from "./composants/MaPage";
import { Menu } from "./composants/Menu";

/*
	le menu menu.jsx
	la page d'accueil home.jsx
	la page de connexion login.jsx
	la page personel page.jsx

	verifie si les routes et liens marchent

	on va mettre en place le contexte
	on creera le context AuthContext
	le fournisseur de contexte AuthProvider
	on consommera le context useAuth

	appel du fournisseur de context
*/

function App() {
	return (
		<AuthProvider>
			<Menu />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route
					path='/page'
					element={
						<Authenticate>
							<MaPage />
						</Authenticate>
					}
				/>
				<Route path='*' element={<Home />} />
			</Routes>
		</AuthProvider>
	);
}

export default App;
