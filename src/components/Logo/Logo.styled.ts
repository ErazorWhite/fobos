import styled from "styled-components";
import {TABLET_BP, typography} from "_/global";
import {Link} from "react-router";

export const StyledLogo = styled.img`
    border-radius: 50%;
    height: 25px;
    width: 25px;
    @media screen and ${TABLET_BP} {
        height: 35px;
        width: 35px;
    }
`

export const LogoBox = styled(Link)`
    ${typography.heading_xl};
    display: flex;
    gap: 16px;
    align-items: center;
    text-decoration: none;
    color: var(--color-primary-fg);
    padding: 20px 16px;

    @media screen and ${TABLET_BP} {
        width: 260px;
        border-right: 1px solid var(--color-border);
        padding: 30px 34px;
    }
`;

export const LogoText = styled.span`
    display: none;
    font-size: 0;

    @media screen and ${TABLET_BP} {
        ${typography.heading_xl};
        font-size: 32px;
        display: block;
    }
`;