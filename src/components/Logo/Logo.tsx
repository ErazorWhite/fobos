import {LogoBox, LogoText, StyledLogo} from "./Logo.styled";

export const Logo = ({isTextProvided = false}) => {
    const src = `${import.meta.env.BASE_URL}favicon.png`;

    return (
        <LogoBox to='/home'>
            <StyledLogo src={src} alt='logo'/>
            {isTextProvided && <LogoText>Fobos</LogoText>}
        </LogoBox>
    );
};