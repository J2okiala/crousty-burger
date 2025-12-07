import "./Logo.css";

export default function Logo() {
    return (
        <div className="LogoStyled">
            <h1 className="logoText left">CROUSTY</h1>
            <img
                src="/images/F03 logo-orange.png"
                alt="logo crousty"
                className="logoImage"
            />
            <h1 className="logoText right">BURGER</h1>
        </div>
    );
}
