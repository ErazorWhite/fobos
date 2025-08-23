import {ButtonLink, StyledButton} from './Button.styled.ts';
import type {FC, MouseEventHandler, ReactNode} from "react";
import {ButtonVariantsColor, ButtonVariantsSize} from "_/global";
import type {To} from "react-router";


interface IButton {
    children?: ReactNode;
    variantSize?: ButtonVariantsSize;
    variantColor?: ButtonVariantsColor;
    isLink?: boolean;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
    to?: To;
    type?: 'button' | 'submit' | 'reset';
    state?: { backgroundLocation: { pathname: string } };
}

export const Button: FC<IButton> = ({
                                        variantSize = ButtonVariantsSize.Main,
                                        variantColor = ButtonVariantsColor.Primary,
                                        disabled = false,
                                        children,
                                        isLink = false,
                                        type = 'submit',
                                        to = '',
                                        state,
                                        onClick,
                                        ...props
                                    }) => {
    const handleClick: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement> = (e) => {
        if (disabled) {
            e.preventDefault();
            e.stopPropagation();
            return;
        }
        if (onClick) onClick(e);
    };
    return isLink ? (
        <ButtonLink
            variantSize={variantSize}
            variantColor={variantColor}
            disabled={disabled}
            to={to}
            state={state}
            onClick={handleClick}
            {...props}
        >
            {children}
        </ButtonLink>
    ) : (
        <StyledButton
            variantSize={variantSize}
            variantColor={variantColor}
            disabled={disabled}
            type={type}
            onClick={handleClick}
            {...props}
        >
            {children}
        </StyledButton>
    );
};
