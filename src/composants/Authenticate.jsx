import { useNavigate } from "react-router-dom";
import { useAuth } from "./Auth";

export const Authenticate = ({ children }) => {
	const auth = useAuth();
	const navigate = useNavigate();
	if (!auth.user) {
		return navigate("/login");
	}
	return { children };
};
