import type {FC} from "react";
import {StyledCrossButton} from "_/components/buttons";
import {IconCross} from "_/components/icons/IconCross.tsx";

interface ICrossButtonProps {
    onClick?: () => void;
}

export const CrossButton: FC<ICrossButtonProps> = ({onClick}) => {
    return (
        <StyledCrossButton onClick={onClick} type="button">
            <IconCross/>
        </StyledCrossButton>
    );
};
