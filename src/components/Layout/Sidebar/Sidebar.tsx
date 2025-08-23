import {
    SidebarContainer,
    NavigationTitle,
    BottomBlock,
    SidebarContent,
    MediaFlexWrapper,
    NavigationDetails,
} from './Sidebar.styled.ts';
import {type FC, memo, useEffect, useState} from 'react';
import {ThemeSwitcher} from "_/components/ThemeSwitcher";
import {ToggleSidebarButton} from "_/components/buttons";
import {useParams} from "react-router";
import {NavigationToPageItem} from "_/components/NavigationToPageItem";

export interface Page {
    id: string;
    name: string;
    path?: string;
}

interface PagesNav {
    pages: Page[];
}

interface ISidebarProps {
    onClick: () => void;
}

export const Sidebar: FC<ISidebarProps> = ({onClick}) => {
    const {pageId} = useParams();
    const [data, setData] = useState<PagesNav | null>(null);
    const [_error, setError] = useState<string | null>(null);


    useEffect(() => {
        const fetchPages = async () => {
            try {
                const url = `${import.meta.env.BASE_URL}pages_nav.json`;
                const res = await fetch(url);
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                const json: PagesNav = await res.json();
                setData(json);
            } catch (e) {
                setError((e as Error).message);
            }
        };

        void fetchPages();
    }, []);

    console.log('pageId', pageId);


    return (
        <SidebarContainer onClick={onClick}>
            <SidebarContent onClick={(e) => e.stopPropagation()}>
                <NavigationTitle>ALL PAGES</NavigationTitle>

                <MediaFlexWrapper>
                    <NavigationDetails>
                        {data?.pages?.map(({id, name}) => {
                            console.log('id', id);
                            return (
                                <NavigationToPageItem key={id} to={`/${id}`} isActive={pageId === id}>
                                    {name}
                                </NavigationToPageItem>
                            )
                        })}
                    </NavigationDetails>
                    <BottomBlock>
                        <ThemeSwitcher/>
                        <ToggleSidebarButton isSidebarVisible={true} onClick={onClick}/>
                    </BottomBlock>
                </MediaFlexWrapper>
            </SidebarContent>
        </SidebarContainer>
    );
};

export const MemoSidebar = memo(Sidebar);
