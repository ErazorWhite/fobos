import {Suspense, useCallback, useEffect, useState} from 'react';
import {TABLET_BP} from "_/global";
import {LoadingSpinner} from "_/components/LoadingSpinner";
import {MemoHeader} from "./Header";
import {LayoutContainer, Main} from "./Layout.styled.ts";
import {MemoSidebar} from "_/components/Layout/Sidebar";
import {ToggleSidebarButton} from "_/components/buttons";
import {Outlet} from "react-router";

const spinner = <LoadingSpinner isLoading={true}/>;

export const Layout = () => {
    const [isDropdownOpened, setIsDropdownOpened] = useState(() => {
        return window.matchMedia(TABLET_BP).matches;
    });
    const [isSpinnerVisible, setIsSpinnerVisible] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => setIsSpinnerVisible(false), 500);
        return () => clearTimeout(timer);
    }, []);

    const handleDropdownToggle = useCallback(() => {
        setIsDropdownOpened((prevState) => !prevState);
    }, []);

    return (
        <Suspense fallback={spinner}>
            {isSpinnerVisible && <LoadingSpinner isLoading={true}/>}
            <MemoHeader isDropdownOpened={isDropdownOpened} onDropDownOpen={handleDropdownToggle}/>
            <LayoutContainer>
                {isDropdownOpened ? (
                    <MemoSidebar onClick={handleDropdownToggle}/>
                ) : (
                    <ToggleSidebarButton isSidebarVisible={false} onClick={handleDropdownToggle}/>
                )}
                <Main>
                    <Outlet/>
                </Main>
            </LayoutContainer>
        </Suspense>
    );
};
