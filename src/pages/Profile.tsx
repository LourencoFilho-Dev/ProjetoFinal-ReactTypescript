import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { auth } from "../services/firebaseConfig";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const { user } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        auth.signOut().then(() => {
            navigate("/login");
        }).catch((error) => {
            console.error("Erro ao deslogar:", error);
        });
    };

    return (
        <div className="profile-container">
            <h2>Perfil do Usuário</h2>
            {user ? (
                <div className="user-info">
                    <p>Email: {user.email}</p>
                    <p>UID: {user.uid}</p>
                    <button onClick={handleLogout}>Deslogar</button>
                </div>
            ) : (
                <p>Nenhum usuário logado.</p>
            )}
        </div>
    );
};

export default Profile;
