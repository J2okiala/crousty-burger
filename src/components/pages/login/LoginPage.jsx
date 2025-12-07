import LoginForm from "./LoginForm";
import Logo from "../../reusable-ui/Logo";
import './LoginPage.css';

//comportement


export default function LoginPage() {

    //Affichage
    return (
        <div className="LoginPageStyled">
            <Logo/>
            <LoginForm/>
        </div>
        
    )
}
