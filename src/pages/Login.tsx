import { useState, useEffect, FormEvent } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../services/firebaseConfig";
import { useAuth } from "../contexts/AuthContext";
import "../css/Login.css";

const AUTO_LOGOUT_TIME = 30 * 60 * 1000; // 30 minutos

export default function Login() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");

    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const { user: currentUser } = useAuth();

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (currentUser) {
            timer = setTimeout(() => {
                auth.signOut();
            }, AUTO_LOGOUT_TIME);
        }
        return () => clearTimeout(timer);
    }, [currentUser]);

    const handleSignIn = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrorMessage("");
        try {
            await signInWithEmailAndPassword(email, password);
        } catch (err) {
            console.error("Erro durante o login: ", err);
        }
    };

    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [user, navigate]);

    useEffect(() => {
        if (error) {
            setErrorMessage(error.message);
        }
    }, [error]);

    return (
        <div className="auth-container border mt-5">
            <header className="auth-header">
                <h2>Login</h2>
                <p className="mt-2">
                    Por favor, digite suas informações de login:
                </p>
            </header>

            <form onSubmit={handleSignIn} className="auth-form">
                <div className="input-container">
                    <label htmlFor="email">E-mail</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="seuemail@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="input-container">
                    <label htmlFor="password">Senha</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="********"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                {errorMessage && <p className="error-message">{errorMessage}</p>}

                <a href="#" className="forgot-password-link">
                    Esqueceu sua senha?
                </a>

                <button type="submit" className="auth-button">
                    Entrar
                </button>

                {loading && <p>Carregando...</p>}

                <div className="auth-footer">
                    <p>Você não tem uma conta?</p>
                    <Link to="/registro" className="auth-link">
                        Crie a sua conta aqui
                    </Link>
                </div>
            </form>
        </div>
    );
}
