import { NavigationItemContainerLink, NavigationText } from './NavigationToPageItem.styled.ts';
import { IconBoard } from '../icons/IconBoard.tsx';
import { FC, ReactNode } from 'react';

interface INavigationToPageItemProps {
  to?: string;
  children: ReactNode;
  isActive?: boolean;
  state?: { backgroundLocation: { pathname: string } };
}

export const NavigationToPageItem: FC<INavigationToPageItemProps> = ({
  isActive = false,
  to = '/',
  state,
  children,
}) => {
  return (
    <NavigationItemContainerLink to={to} state={state} isActive={isActive}>
      <IconBoard />
      <NavigationText>{children}</NavigationText>
    </NavigationItemContainerLink>
  );
};
