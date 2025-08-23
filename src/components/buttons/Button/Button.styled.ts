import styled, {css} from 'styled-components';
import {ButtonVariantsColor, ButtonVariantsSize, TABLET_BP, typography} from "_/global";
import {Link} from "react-router";


const variantSizes = {
    [ButtonVariantsSize.Header]: {
        padding: '10px 18px',
        paddingTablet: '15px 25px',
        fontSize: '15px',
        lineHeight: 'auto',
        width: 'auto',
    },
    [ButtonVariantsSize.Main]: {
        padding: '15px 18px',
        paddingTablet: '15px 18px',
        fontSize: '15px',
        lineHeight: 'auto',
        width: 'auto',
    },
    [ButtonVariantsSize.Modal]: {
        padding: '9px 0',
        paddingTablet: '9px 0',
        fontSize: '13px',
        lineHeight: 1.8,
        width: '100%',
    },
};

const variantColors = {
    [ButtonVariantsColor.Primary]: {
        backgroundColor: 'var(--color-accent-bg)',
        hoverBackgroundColor: 'var(--color-main-purple-hover)',
        color: 'var(--color-white)',
    },
    [ButtonVariantsColor.Secondary]: {
        backgroundColor: 'var(--color-light-accent-bg)',
        hoverBackgroundColor: 'var(--color-light-accent-bg-hover)',
        color: 'var(--color-accent-bg)',
    },
    [ButtonVariantsColor.Destructive]: {
        backgroundColor: 'var(--color-red)',
        hoverBackgroundColor: 'var(--color-red-hover)',
        color: 'var(--color-white)',
    },
};

interface IStyledButton {
    variantSize?: ButtonVariantsSize;
    variantColor?: ButtonVariantsColor;
    disabled?: boolean;
}

export const BaseButtonStyles = css<IStyledButton>`
    ${typography.heading_m}
    display: flex;
    align-items: center;
    align-self: center;
    justify-content: center;
    background-color: ${({disabled = false, variantColor = ButtonVariantsColor.Primary}) =>
            disabled ? 'var(--color-accent-bg-disabled)' : variantColors[variantColor].backgroundColor};
    color: ${({disabled = false, variantColor = ButtonVariantsColor.Primary}) =>
            disabled ? 'var(--color-accent-fg-disabled)' : variantColors[variantColor].color};
    fill: ${({disabled = false, variantColor = ButtonVariantsColor.Primary}) =>
            disabled ? 'var(--color-accent-fg-disabled)' : variantColors[variantColor].color};
    padding: ${({variantSize = ButtonVariantsSize.Main}) => variantSizes[variantSize].padding};
    font-size: ${({variantSize = ButtonVariantsSize.Main}) => variantSizes[variantSize].fontSize};
    line-height: ${({variantSize = ButtonVariantsSize.Main}) =>
            variantSizes[variantSize].lineHeight};
    border: none;
    border-radius: 24px;
    min-height: 32px;
    width: ${({variantSize = ButtonVariantsSize.Main}) => variantSizes[variantSize].width};
    min-width: 48px;
    text-decoration: none;
    transition: var(--animation-ease-in);
    cursor: pointer;

    &:hover,
    &:focus {
        background-color: ${({disabled, variantColor = ButtonVariantsColor.Primary}) =>
                !disabled && variantColors[variantColor].hoverBackgroundColor};
    }

    @media screen and ${TABLET_BP} {
        padding: ${({variantSize = ButtonVariantsSize.Main}) =>
                variantSizes[variantSize].paddingTablet};
    }
`;

export const StyledButton = styled.button.withConfig({
    shouldForwardProp: (prop) => !['variantColor', 'variantSize'].includes(prop),
})<IStyledButton>`
    ${BaseButtonStyles}
`;

export const ButtonLink = styled(Link).withConfig({
    shouldForwardProp: (prop) => !['variantColor', 'variantSize'].includes(prop),
})<IStyledButton>`
    ${BaseButtonStyles}
`;
