import styled from "styled-components";
import LoginForm from "./LoginForm";
import Logo from "../../reusable-ui/Logo";
import './LoginPage.css';

//comportement

const LoginPageStyled = styled.div`
    height: 100vh;
    flex-direction: column;
    jsutify-content: center;
    align-items: center;
    `


export default function LoginPage() {

    //Affichage
    return (
        <LoginPageStyled>
            <Logo/>
            <LoginForm/>
        </LoginPageStyled>
        
    )
}
