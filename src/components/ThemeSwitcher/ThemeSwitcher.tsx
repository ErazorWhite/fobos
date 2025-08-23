import {type FC, useCallback, useState} from "react";
import {Theme, useTheme} from "_/hooks";
import {
    ToggleContainer,
    ToggleMainBlock,
    ToggleOption,
    ToggleThumb
} from "_/components/ThemeSwitcher/ThemeSwitcher.styled.ts";
import {IconLightTheme} from "_/components/icons/IconLightTheme.tsx";
import {IconDarkTheme} from "_/components/icons/IconDarkTheme.tsx";

export const ThemeSwitcher: FC = () => {
    const [currentStoredTheme, setCurrentStoredTheme] = useTheme();
    const [isChecked, setIsChecked] = useState(
        currentStoredTheme ? currentStoredTheme === Theme.Dark : true
    ); // make dark as default

    const handleToggle = useCallback(() => {
        setCurrentStoredTheme(currentStoredTheme === Theme.Light ? Theme.Dark : Theme.Light);
        setIsChecked((prevState) => !prevState);
    }, [currentStoredTheme]);

    return (
        <ToggleMainBlock onClick={handleToggle} type="button" aria-pressed={isChecked}>
            <ToggleOption active={!isChecked}>
                <IconLightTheme/>
            </ToggleOption>
            <ToggleContainer>
                <ToggleThumb isChecked={isChecked}/>
            </ToggleContainer>
            <ToggleOption active={isChecked}>
                <IconDarkTheme/>
            </ToggleOption>
        </ToggleMainBlock>
    );
};
