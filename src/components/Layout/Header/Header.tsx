import {type FC, memo, useEffect, useState} from "react";
import {Controls, DropdownButton, Nav, Page, PageName, StyledHeader} from "_/components/Layout";
import {IconChevronUp} from "_/components/icons/IconChevronUp.tsx";
import {IconChevronDown} from "_/components/icons/IconChevronDown.tsx";
import {Logo} from "_/components/Logo/Logo.tsx";
import {useParams} from "react-router";

interface IHeaderProps {
    isDropdownOpened: boolean;
    onDropDownOpen: () => void;

}

const Header: FC<IHeaderProps> = ({isDropdownOpened, onDropDownOpen}) => {
    const {pageId = ''} = useParams<{ pageId: string }>();
    const [pages, setPages] = useState<Page[]>([]);

    useEffect(() => {
        const fetchPages = async () => {
            try {
                const url = `${import.meta.env.BASE_URL}pages_nav.json`;
                const res = await fetch(url);
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                const json = await res.json();
                setPages(json.pages);
            } catch (err) {
                console.error("Failed to load pages_nav.json", err);
            }
        };

        fetchPages();
    }, []);

    const currentPage = pages.find((page) => page.id === pageId) || null;

    return (
        <StyledHeader>
            <Nav>
                <Logo isTextProvided/>
                {currentPage && <PageName>{currentPage?.name}</PageName>}
                <DropdownButton onClick={onDropDownOpen}>
                    {isDropdownOpened ? <IconChevronUp/> : <IconChevronDown/>}
                </DropdownButton>
            </Nav>
            <Controls>
                {/* TODO: TBD */}
            </Controls>
        </StyledHeader>
    );
};

export const MemoHeader = memo(Header);
