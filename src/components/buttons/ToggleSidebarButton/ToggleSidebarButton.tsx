import type {FC} from "react";
import {HideSidebarButtonContainer, ShowSidebarButtonContainer} from "_/components/buttons";
import {IconHideSidebar} from "_/components/icons/IconHideSidebar.tsx";
import {IconShowSidebar} from "_/components/icons/IconShowSidebar.tsx";

interface IHideSidebarButton {
    isSidebarVisible: boolean;
    onClick: () => void;
}

export const ToggleSidebarButton: FC<IHideSidebarButton> = ({
                                                                isSidebarVisible = false,
                                                                onClick,
                                                            }) => {
    return isSidebarVisible ? (
        <HideSidebarButtonContainer onClick={onClick}>
            <IconHideSidebar/>
            Hide Sidebar
        </HideSidebarButtonContainer>
    ) : (
        <ShowSidebarButtonContainer onClick={onClick}>
            <IconShowSidebar/>
        </ShowSidebarButtonContainer>
    );
};
