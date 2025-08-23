import {LogoBox, LogoText, StyledLogo} from "./Logo.styled";

export const Logo = ({isTextProvided = false}) => {
    return (
        <LogoBox to='/home'>
            <StyledLogo src='public/favicon.png' alt='logo'/>
            {isTextProvided && <LogoText>Fobos</LogoText>}
        </LogoBox>
    );
};